<script setup lang="ts">
import fontkit from '@pdf-lib/fontkit'
import { PDFDocument, rgb } from 'pdf-lib'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'
import { computed, markRaw, nextTick, onBeforeUnmount, onMounted, reactive, ref, shallowRef, watch } from 'vue'

import dancingScriptUrl from '@/assets/fonts/DancingScript.ttf?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

type UserId = number | string

export interface PdfSignerUser {
  id: UserId
  name: string
  initials?: string
  role?: string
  label?: string
}

export interface PdfSignerSignature {
  id: string
  x: number
  y: number
  width: number
  height: number
  page: number
  userId: UserId | null
  name: string
  initials: string
  label?: string
  signed: boolean
}

type Signature = PdfSignerSignature

interface SignatureState {
  signatures: Signature[]
  activeSignature: Signature | null
  currentUser: {
    id: UserId | null
    name: string
    initials: string
  }
  pageSize: {
    width: number
    height: number
  }
}

const DEFAULT_SIGNATURE_SIZE = {
  width: 180,
  height: 100
}

const DEFAULT_FONT_URL = dancingScriptUrl
const DEFAULT_INITIAL_SCALE = 0.8
const DEFAULT_MIN_SCALE = 0.6
const DEFAULT_MAX_SCALE = 2.4

const props = withDefaults(
  defineProps<{
    users?: PdfSignerUser[]
    currentUser?: PdfSignerUser | null
    pdfUrl?: string
    enableUpload?: boolean
    signaturesJson?: string
  }>(),
  {
    users: () => [
      { id: 1, initials: 'DI', name: 'Dian', role: 'Approval', label: 'Menyetujui' },
      { id: 2, initials: 'AI', name: 'Aini', role: 'Approval', label: 'Menyetujui' },
      { id: 3, initials: 'KA', name: 'Kartika', role: 'Viewer', label: 'Mengetahui' }
    ],
    currentUser: null,
    enableUpload: undefined,
    signaturesJson: ''
  }
)

const emit = defineEmits<{
  (event: 'signature:create', signature: Signature): void
  (event: 'signature:update', signature: Signature): void
  (event: 'signature:sign', signature: Signature): void
  (event: 'update:signaturesJson', value: string): void
}>()

const canvas = ref<HTMLCanvasElement | null>(null)
const canvasScroller = ref<HTMLDivElement | null>(null)
const pdfDoc = shallowRef<any>(null)
const pageSize = ref({ width: 0, height: 0 })
const scale = ref(DEFAULT_INITIAL_SCALE)
const pdfBytes = ref<Uint8Array | null>(null)
const fileName = ref('')
const errorMessage = ref('')
const uploadError = ref('')
const signaturesJson = ref(props.signaturesJson ?? '')
const signaturesJsonError = ref('')
const skipJsonParse = ref(false)
const autoFitActive = ref(true)
const pageLayouts = ref<{ page: number; start: number; height: number }[]>([])
const previewHeight = ref(0)
const isPanning = ref(false)
const isUploading = ref(false)
const isPositionLocked = ref(false)
let panStartX = 0
let panStartY = 0
let panScrollLeft = 0
let panScrollTop = 0

const shouldSkipPan = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) return true
  if (!canvasScroller.value?.contains(target)) return true
  if (target.closest('.signature')) return true
  if (target.closest('.signature-action')) return true
  return false
}
type SignerCandidate = PdfSignerUser | { id: UserId | null; name: string; initials: string }
const draggingUser = ref<PdfSignerUser | null>(null)

const state = reactive<SignatureState>({
  signatures: [],
  activeSignature: null,
  currentUser: {
    id: null,
    name: '',
    initials: ''
  },
  pageSize: { width: 0, height: 0 }
})

const currentSignerId = computed(() => props.currentUser?.id ?? state.currentUser.id)
const showUpload = computed(() => props.enableUpload ?? true)

const getInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('')

const getPageLayoutForY = (y: number) => {
  if (pageLayouts.value.length === 0) return null
  return pageLayouts.value.find((layout) => y >= layout.start && y < layout.start + layout.height) ??
    pageLayouts.value[pageLayouts.value.length - 1]
}

const clampToPage = (size: { width: number; height: number }, sig: Signature, x: number, y: number) => {
  const maxX = Math.max(0, size.width - sig.width)
  const maxY = Math.max(0, size.height - sig.height)
  return {
    x: Math.max(0, Math.min(x, maxX)),
    y: Math.max(0, Math.min(y, maxY))
  }
}

const isOverlapping = (signatures: Signature[], sig: Signature, x: number, y: number) => {
  const next = {
    left: x,
    top: y,
    right: x + sig.width,
    bottom: y + sig.height
  }

  return signatures.some((other) => {
    if (other === sig) return false
    const rect = {
      left: other.x,
      top: other.y,
      right: other.x + other.width,
      bottom: other.y + other.height
    }
    return next.left < rect.right && next.right > rect.left && next.top < rect.bottom && next.bottom > rect.top
  })
}

const dragging = reactive<{
  sig: Signature | null
  lastValidPos: { x: number; y: number } | null
}>({
  sig: null,
  lastValidPos: null
})

const setCurrentUser = (user: PdfSignerUser | null) => {
  state.currentUser.id = user?.id ?? null
  state.currentUser.name = user?.name ?? ''
  state.currentUser.initials = user?.initials ?? getInitials(user?.name || '')
}

const setPageSize = (size: { width: number; height: number }) => {
  state.pageSize.width = size?.width ?? 0
  state.pageSize.height = size?.height ?? 0
}

const clearSignatures = () => {
  state.signatures.splice(0, state.signatures.length)
  state.activeSignature = null
  pageLayouts.value = []
  previewHeight.value = 0
}

const clearUser = () => {
  if (props.currentUser) {
    setCurrentUser(props.currentUser)
  } else {
    setCurrentUser(null)
  }
}

const buildSignature = (x: number, y: number, page: number, signer: SignerCandidate | null): Signature => ({
  id: crypto.randomUUID(),
  x,
  y,
  width: DEFAULT_SIGNATURE_SIZE.width,
  height: DEFAULT_SIGNATURE_SIZE.height,
  page,
  userId: signer?.id ?? state.currentUser.id,
  name: signer?.name ?? state.currentUser.name,
  initials: (signer?.initials ?? state.currentUser.initials) || getInitials(signer?.name || state.currentUser.name || ''),
  label: (signer as PdfSignerUser | null)?.label ?? '',
  signed: false
})

const addSignatureAt = (x: number, y: number) => {
  const signer = draggingUser.value ?? state.currentUser
  const sig = buildSignature(0, 0, 1, signer)
  const clamped = clampToPage(state.pageSize, sig, x, y)
  if (isOverlapping(state.signatures, sig, clamped.x, clamped.y)) {
    return null
  }
  const layout = getPageLayoutForY(clamped.y)
  sig.x = clamped.x
  sig.y = clamped.y
  sig.page = layout?.page ?? 1
  state.signatures.push(sig)
  state.activeSignature = sig
  emit('signature:create', { ...sig })
  return sig
}

const selectSignature = (sig: Signature) => {
  state.activeSignature = sig
}

const canSign = (sig: Signature | null) => sig && !sig.signed && sig.userId === currentSignerId.value

const signSignature = (sig: Signature) => {
  if (!canSign(sig)) return false
  sig.signed = true
  emit('signature:sign', { ...sig })
  emit('signature:update', { ...sig })
  return true
}

const canDrag = (sig: Signature | null) => sig && !sig.signed
const canMoveSignature = (sig: Signature | null) => canDrag(sig) && !isPositionLocked.value

const startDrag = (e: MouseEvent, sig: Signature) => {
  if (!canMoveSignature(sig)) return
  dragging.sig = sig
  dragging.lastValidPos = { x: sig.x, y: sig.y }
  dragOffsetX = e.offsetX
  dragOffsetY = e.offsetY

  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
}

const moveDrag = (x: number, y: number) => {
  const sig = dragging.sig
  if (!sig) return false
  if (isPositionLocked.value) return false
  const clamped = clampToPage(state.pageSize, sig, x, y)
  if (!isOverlapping(state.signatures, sig, clamped.x, clamped.y)) {
    sig.x = clamped.x
    sig.y = clamped.y
    dragging.lastValidPos = { x: clamped.x, y: clamped.y }
    return true
  }
  if (dragging.lastValidPos) {
    sig.x = dragging.lastValidPos.x
    sig.y = dragging.lastValidPos.y
  }
  return false
}

const stopDrag = () => {
  const sig = dragging.sig
  dragging.sig = null
  dragging.lastValidPos = null
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  if (sig) {
    if (!isPositionLocked.value) {
      emit('signature:update', { ...sig })
    }
  }
}

const selectUser = async (user: PdfSignerUser) => {
  if (!props.currentUser) {
    setCurrentUser(user)
  }
  if (pdfDoc.value) {
    await nextTick()
    await render()
  }
}

const handleUserDragStart = (user: PdfSignerUser, event: DragEvent) => {
  draggingUser.value = user
  void selectUser(user)
  if (event.dataTransfer) {
    event.dataTransfer.setData('text/plain', 'signature')
    event.dataTransfer.effectAllowed = 'copy'
  }
}

const startPan = (event: MouseEvent) => {
  if (!canvasScroller.value) return
  if (event.button !== 0) return
  if (shouldSkipPan(event.target)) return
  isPanning.value = true
  const rect = canvasScroller.value.getBoundingClientRect()
  panStartX = event.clientX - rect.left
  panStartY = event.clientY - rect.top
  panScrollLeft = canvasScroller.value.scrollLeft
  panScrollTop = canvasScroller.value.scrollTop
  document.body.style.cursor = 'grabbing'
}

const movePan = (event: MouseEvent) => {
  if (!isPanning.value || !canvasScroller.value) return
  event.preventDefault()
  const rect = canvasScroller.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const walkX = x - panStartX
  const walkY = y - panStartY
  canvasScroller.value.scrollLeft = panScrollLeft - walkX
  canvasScroller.value.scrollTop = panScrollTop - walkY
}

const stopPan = () => {
  if (!isPanning.value) return
  isPanning.value = false
  document.body.style.cursor = ''
}

const loadPdfBytes = async (bytes: Uint8Array, name?: string) => {
  errorMessage.value = ''
  const pdfData = bytes.slice()
  const exportData = bytes.slice()
  pdfBytes.value = exportData
  if (name) fileName.value = name
  try {
    pdfDoc.value = markRaw(await pdfjsLib.getDocument({ data: pdfData }).promise)
    autoFitActive.value = true
    clearSignatures()
    clearUser()
    await render()
  } catch (err: any) {
    pdfDoc.value = null
    pdfBytes.value = null
    notePdfError(err)
  }
}

const noteUploadError = (err: unknown, fallback: string) => {
  uploadError.value = err instanceof Error ? err.message : fallback
}

const processUpload = async (file: File) => {
  if (file.type !== 'application/pdf') {
    uploadError.value = 'File harus berupa PDF.'
    return
  }
  uploadError.value = ''
  isUploading.value = true
  try {
    await loadPdfBytes(new Uint8Array(await file.arrayBuffer()), file.name)
  } catch (err) {
    noteUploadError(err, 'Gagal upload PDF.')
  } finally {
    isUploading.value = false
  }
}

const handleUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement)?.files?.[0]
  if (!file) return
  await processUpload(file)
}

const loadPdfFromUrl = async (url: string) => {
  if (!url) return
  errorMessage.value = ''
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Gagal mengunduh PDF.')
    }
    const buffer = await response.arrayBuffer()
    const bytes = new Uint8Array(buffer)
    await loadPdfBytes(bytes, url.split('/').pop())
  } catch (err: any) {
    notePdfError(err)
  }
}

const notePdfError = (err: any) => {
  const msg = err?.message || 'PDF tidak valid atau rusak. Coba file PDF lain.'
  errorMessage.value = msg
}

const render = async () => {
  if (!pdfDoc.value) return
  await nextTick()
  if (!canvas.value) return

  const pageCount = pdfDoc.value.numPages
  const pageInfos: { page: any; baseViewport: any }[] = []
  let maxWidth = 0
  let totalHeight = 0
  const layouts: { page: number; start: number; height: number }[] = []
  let cumulativeHeight = 0

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    const pdfPage = await pdfDoc.value.getPage(pageNumber)
    const baseViewport = pdfPage.getViewport({ scale: 1 })
    pageInfos.push({ page: pdfPage, baseViewport })
    layouts.push({
      page: pageNumber,
      start: cumulativeHeight,
      height: baseViewport.height
    })
    totalHeight += baseViewport.height
    maxWidth = Math.max(maxWidth, baseViewport.width)
    cumulativeHeight += baseViewport.height
  }
  pageLayouts.value = layouts

  pageSize.value = {
    width: maxWidth,
    height: totalHeight
  }
  setPageSize(pageSize.value)

  if (autoFitActive.value) {
    fitToWidth()
  }

  const ctx = canvas.value.getContext('2d')
  if (!ctx) return

  const targetScale = scale.value
  const scaledWidth = maxWidth * targetScale
  const scaledHeight = totalHeight * targetScale
  canvas.value.width = scaledWidth
  canvas.value.height = scaledHeight

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  let offsetY = 0

  for (const info of pageInfos) {
    const viewport = info.page.getViewport({ scale: targetScale })
    ctx.save()
    ctx.translate(0, offsetY)
    await info.page.render({
      canvasContext: ctx,
      viewport
    }).promise
    ctx.restore()
    offsetY += viewport.height
  }

  const firstPageHeight = pageInfos[0]?.baseViewport.height ?? 0
  previewHeight.value = firstPageHeight * targetScale
}

const onDrop = (event: DragEvent) => {
  if (!pdfDoc.value || !canvas.value) return
  if (event.dataTransfer?.getData('text/plain') !== 'signature') return

  const rect = canvas.value.getBoundingClientRect()
  const x = (event.clientX - rect.left - (DEFAULT_SIGNATURE_SIZE.width * scale.value) / 2) / scale.value
  const y = (event.clientY - rect.top - (DEFAULT_SIGNATURE_SIZE.height * scale.value) / 2) / scale.value

  const sig = addSignatureAt(x, y)
  if (!sig) return
  draggingUser.value = null
  selectSignature(sig)
}

const onDrag = (event: MouseEvent) => {
  if (!canvas.value) return

  const rect = canvas.value.getBoundingClientRect()
  const x = (event.clientX - rect.left - dragOffsetX) / scale.value
  const y = (event.clientY - rect.top - dragOffsetY) / scale.value
  moveDrag(x, y)
}

const signatureStyle = (sig: Signature) => ({
  width: `${sig.width * scale.value}px`,
  height: `${sig.height * scale.value}px`,
  left: `${sig.x * scale.value}px`,
  top: `${sig.y * scale.value}px`,
  '--sig-height': `${sig.height * scale.value}px`,
  '--sig-width': `${sig.width * scale.value}px`
})

let resizeObserver: ResizeObserver | null = null

const fitToWidth = () => {
  if (!canvasScroller.value || !pdfDoc.value || !state.pageSize.width) return
  const containerWidth = canvasScroller.value.clientWidth
  if (!containerWidth) return
  const widthScale = containerWidth / state.pageSize.width
  const desiredScale = Math.min(
    DEFAULT_MAX_SCALE,
    Math.max(DEFAULT_MIN_SCALE, Math.min(widthScale, 0.8))
  )
  if (Math.abs(desiredScale - scale.value) < 0.001) {
    return desiredScale
  }
  scale.value = desiredScale
  return desiredScale
}

const observeCanvasScroller = () => {
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  if (typeof ResizeObserver === 'undefined' || !canvasScroller.value) return
  resizeObserver = new ResizeObserver(() => {
    if (autoFitActive.value) {
      fitToWidth()
    }
  })
  resizeObserver.observe(canvasScroller.value)
}

const manualZoom = () => {
  autoFitActive.value = false
}

const normalizeSignatureInput = (value: any, index: number): Signature => {
  if (!value || typeof value !== 'object') {
    throw new Error(`Signature index ${index + 1} tidak valid.`)
  }
  const name = typeof value.name === 'string' ? value.name : ''
  const initials =
    typeof value.initials === 'string' && value.initials.trim()
      ? value.initials
      : getInitials(name)
  return {
    id: typeof value.id === 'string' ? value.id : crypto.randomUUID(),
    x: Number(value.x) || 0,
    y: Number(value.y) || 0,
    width: Number(value.width) || DEFAULT_SIGNATURE_SIZE.width,
    height: Number(value.height) || DEFAULT_SIGNATURE_SIZE.height,
    page: Math.max(1, Number(value.page) || 1),
    userId: value.userId ?? null,
    name,
    initials,
    label: typeof value.label === 'string' ? value.label : '',
    signed: Boolean(value.signed)
  }
}

const updateJsonFromSignatures = () => {
  skipJsonParse.value = true
  signaturesJson.value = JSON.stringify(state.signatures, null, 2)
  signaturesJsonError.value = ''
  emit('update:signaturesJson', signaturesJson.value)
}

const applySignaturesFromJson = (value: string) => {
  if (!value.trim()) {
    clearSignatures()
    signaturesJsonError.value = ''
    return
  }
  const parsed = JSON.parse(value)
  if (!Array.isArray(parsed)) {
    throw new Error('JSON harus berupa array signature.')
  }
  const nextSignatures = parsed.map((item, index) => normalizeSignatureInput(item, index))
  state.signatures.splice(0, state.signatures.length, ...nextSignatures)
  state.activeSignature = null
}

watch(
  () => props.currentUser,
  (user) => {
    if (user) {
      setCurrentUser(user)
    }
  },
  { immediate: true }
)

watch(
  () => props.pdfUrl,
  (value) => {
    if (value) {
      void loadPdfFromUrl(value)
    }
  },
  { immediate: true }
)

const zoomIn = () => {
  manualZoom()
  scale.value = Math.min(DEFAULT_MAX_SCALE, +(scale.value + 0.2).toFixed(2))
}

const zoomOut = () => {
  manualZoom()
  scale.value = Math.max(DEFAULT_MIN_SCALE, +(scale.value - 0.2).toFixed(2))
}

watch(scale, () => {
  if (pdfDoc.value) void render()
})

watch(
  () => props.signaturesJson,
  (value) => {
    if (typeof value === 'string' && value !== signaturesJson.value) {
      signaturesJson.value = value
    }
  }
)

watch(
  () => state.signatures,
  () => {
    updateJsonFromSignatures()
  },
  { deep: true }
)

watch(signaturesJson, (value) => {
  if (skipJsonParse.value) {
    skipJsonParse.value = false
    return
  }
  signaturesJsonError.value = ''
  try {
    applySignaturesFromJson(value)
  } catch (err) {
    signaturesJsonError.value =
      err instanceof Error ? err.message : 'JSON signature tidak valid.'
  }
})

watch(
  canvasScroller,
  (el) => {
    if (el) {
      observeCanvasScroller()
      if (autoFitActive.value) {
        fitToWidth()
      }
    } else if (resizeObserver) {
      resizeObserver.disconnect()
      resizeObserver = null
    }
  },
  { flush: 'post' }
)

const fitFontSize = (font: any, text: string, maxWidth: number, maxHeight: number, startSize: number) => {
  let size = Math.min(startSize, maxHeight)
  while (size > 6 && font.widthOfTextAtSize(text, size) > maxWidth) {
    size -= 1
  }
  return size
}

const exportSignedPdfFile = async ({
  pdfBytes,
  pageSize,
  signatures,
  fontUrl,
  fileName
}: {
  pdfBytes: Uint8Array
  pageSize: { width: number; height: number }
  signatures: Signature[]
  fontUrl: string
  fileName: string
}) => {
  const doc = await PDFDocument.load(pdfBytes)
  doc.registerFontkit(fontkit)
  const scriptBytes = await fetch(fontUrl).then((r) => r.arrayBuffer())
  const scriptFont = await doc.embedFont(scriptBytes)

  signatures.forEach((sig) => {
    if (!sig.signed) return
    const label = sig.initials?.trim()
    if (!label) return

    const font = scriptFont
    const maxWidth = sig.width - 12
    const maxHeight = sig.height - 12
    const startSize = 26
    const size = fitFontSize(font, label, maxWidth, maxHeight, startSize)
    const textWidth = font.widthOfTextAtSize(label, size)

    const x = sig.x + (sig.width - textWidth) / 2
    const layout = pageLayouts.value.find((layout) => layout.page === sig.page)
    const pageIndex = Math.min(Math.max(sig.page - 1, 0), doc.getPageCount() - 1)
    const pdfPage = doc.getPage(pageIndex)
    const pageHeight = layout?.height ?? pageSize.height
    const start = layout?.start ?? 0
    const localY = sig.y - start
    const y = pageHeight - localY - sig.height + (sig.height - size) / 2

    pdfPage.drawText(label, {
      x,
      y,
      size,
      font,
      color: rgb(0.1, 0.46, 0.82)
    })
  })

  const outBytes = await doc.save()
  return {
    bytes: outBytes,
    fileName: fileName ? fileName.replace(/\.pdf$/i, '') + '-signed.pdf' : 'signed.pdf'
  }
}

const downloadPdf = ({ bytes, fileName }: { bytes: Uint8Array; fileName: string }) => {
  const buffer = bytes.buffer as ArrayBuffer
  const blob = new Blob([buffer], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName || 'signed.pdf'
  link.click()
  URL.revokeObjectURL(url)
}

const exportSignedPdf = async () => {
  if (!pdfBytes.value) return
  const result = await exportSignedPdfFile({
    pdfBytes: pdfBytes.value,
    pageSize: pageSize.value,
    signatures: state.signatures,
    fontUrl: DEFAULT_FONT_URL,
    fileName: fileName.value
  })
  downloadPdf(result)
}

let dragOffsetX = 0
let dragOffsetY = 0

onBeforeUnmount(() => {
  stopDrag()
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }
  window.removeEventListener('mousemove', movePan)
  window.removeEventListener('mouseup', stopPan)
})

onMounted(() => {
  window.addEventListener('mousemove', movePan)
  window.addEventListener('mouseup', stopPan)
  updateJsonFromSignatures()
})

defineExpose({
  getSignatures: () => state.signatures.map((sig) => ({ ...sig })),
  lockPositions: () => {
    isPositionLocked.value = true
  },
  loadPdfFile: (file: File) => processUpload(file),
  setDraggingUser: (user: PdfSignerUser | null) => {
    draggingUser.value = user
  },
  clearDraggingUser: () => {
    draggingUser.value = null
  },
  selectUser
})
</script>

<template>
  <div class="sign-pdf">
    <div class="topbar">
      <div class="upload-group">
        <span class="upload-label">PDF Aktif</span>
        <span class="upload-filename">{{ fileName || 'Belum ada file' }}</span>
        <div v-if="showUpload" class="upload-control">
          <label class="upload-button">
            Upload PDF
            <input class="upload-input" type="file" accept="application/pdf" :disabled="isUploading"
              @change="handleUpload" />
          </label>
        </div>
      </div>

      <div class="topbar-actions">
        <div class="zoom-controls">
          <button type="button" class="zoom-button" @click="zoomOut">-</button>
          <span class="zoom-label">{{ Math.round(scale * 100) }}%</span>
          <button type="button" class="zoom-button" @click="zoomIn">+</button>
        </div>
        <button type="button" class="save-button" :disabled="!pdfDoc" @click="exportSignedPdf">Save PDF</button>
      </div>
    </div>

    <div v-if="errorMessage" class="error-banner">
      {{ errorMessage }}
    </div>
    <div v-if="uploadError" class="error-banner">
      {{ uploadError }}
    </div>
    <div class="content-grid">
      <section class="preview-panel">
        <div v-if="!pdfDoc" class="preview-empty">
          Upload a PDF to preview and start signing.
        </div>
        <div v-else class="canvas-scroller" :class="{ grabbing: isPanning }" ref="canvasScroller"
          :style="{ height: previewHeight ? `${previewHeight}px` : 'auto' }" @dragover.prevent @drop="onDrop"
          @mousedown="startPan" @mouseleave="stopPan">
          <div class="canvas-wrapper">
            <canvas ref="canvas"></canvas>
            <div v-for="sig in state.signatures" :key="sig.id" class="signature"
              :class="{ signed: sig.signed, active: sig === state.activeSignature }" :style="signatureStyle(sig)"
              @mousedown="startDrag($event, sig)" @click="selectSignature(sig)">
              <div class="signature-content" :class="{ signed: sig.signed, unsigned: !sig.signed }">
                <template v-if="sig.signed">
                  <span class="signature-text done">
                    {{ sig.initials }}
                  </span>
                </template>
                <template v-else>
                  <span v-if="sig.label" class="signature-role">{{ sig.label }}</span>
                  <button v-if="canSign(sig)" type="button" class="signature-action" @click.stop="signSignature(sig)">
                    Sign
                  </button>
                  <span class="signature-text pending signature-name">
                    {{ sig.name }}
                  </span>
                </template>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="signers-panel">
        <div>
          <p class="signers-title">Signers</p>
          <p class="signers-hint">Drag into page to place a signature.</p>
        </div>
        <div class="signers-list">
          <button v-for="user in props.users" :key="user.id" type="button" class="signer-card"
            :class="{ active: state.currentUser.id === user.id }" draggable="true" @click="selectUser(user)"
            @dragstart="handleUserDragStart(user, $event)">
            <span class="signer-name">{{ user.name }}</span>
            <span class="signer-initial">{{ user.initials ?? getInitials(user.name) }}</span>
          </button>
        </div>

      </section>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url('@/assets/fonts/DancingScript.ttf') format('truetype');
}

.sign-pdf {
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #0f172a;
}

.topbar {
  background: #ffffff;
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
}

.upload-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.upload-label {
  font-weight: 600;
  font-size: 14px;
}

.upload-control {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  height: 40px;
  border-radius: 10px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.upload-input {
  display: none;
}

.upload-button {
  background: #1e293b;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 0 10px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
}

.upload-filename {
  font-size: 12px;
  color: #475569;
  min-width: 120px;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
}

.zoom-controls {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border-radius: 12px;
  padding: 0 10px;
  height: 40px;
  border: 1px solid #e2e8f0;
}


.zoom-button {
  border: none;
  background: transparent;
  font-size: 16px;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  cursor: pointer;
  color: #1e293b;
}

.zoom-button:hover {
  background: #e2e8f0;
}

.zoom-label {
  font-weight: 600;
  min-width: 48px;
  text-align: center;
}

.save-button {
  border: none;
  background: #7c6ff0;
  color: #ffffff;
  font-weight: 600;
  padding: 0 16px;
  height: 40px;
  border-radius: 12px;
  cursor: pointer;
}

.save-button:hover {
  background: #6a5de6;
}

.error-banner {
  padding: 10px 12px;
  border-radius: 12px;
  background: #ffebee;
  color: #b71c1c;
  border: 1px solid #ffcdd2;
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(110px, 150px);
  gap: 16px;
  align-items: start;
}

.signers-panel {
  background: transparent;
  border-radius: 12px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  max-width: 150px;
  align-items: stretch;
}

.signers-title {
  font-weight: 600;
  font-size: 14px;
  color: #64748b;
}

.signers-hint {
  font-size: 11px;
  color: #94a3b8;
}

.signers-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
}


.signer-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 6px 8px;
  background: #ffffff;
  cursor: grab;
  text-align: left;
  gap: 8px;
  width: 100%;
}

.signer-card.active {
  border-color: #7c6ff0;
  box-shadow: 0 0 0 1px rgba(124, 111, 240, 0.4);
}

.signer-card:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  border-style: solid;
}

.signer-name {
  font-weight: 600;
  font-size: 13px;
}

.signer-initial {
  font-family: 'Dancing Script', cursive;
  color: #7c6ff0;
  font-size: 16px;
}

.preview-panel {
  background: #f6f6f7;
  border-radius: 18px;
  padding: 18px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08);
}

.preview-empty {
  background: #ffffff;
  border-radius: 16px;
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  font-weight: 500;
  text-align: center;
  padding: 20px;
}

.canvas-scroller {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-width: none;
  cursor: grab;
}

.canvas-scroller::-webkit-scrollbar {
  width: 0;
  height: 0;
  border-radius: 16px;
  padding: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
}

.canvas-wrapper {
  position: relative;
  display: inline-block;
}

.canvas-scroller.grabbing {
  cursor: grabbing;
}

.signature {
  position: absolute;
  border: 2px dashed #7c6ff0;
  background: rgba(124, 111, 240, 0.12);
  color: #7c6ff0;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
  user-select: none;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
}

.signature-action {
  position: static;
  padding: 2px 8px;
  border: none;
  border-radius: 6px;
  background: #1e293b;
  color: white;
  font-size: clamp(10px, 1.8vw, 11px);
  line-height: 1;
  cursor: pointer;
  opacity: 0.85;
}


.signature-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 4px 6px;
}

.signature-content.signed {
  justify-content: center;
  align-items: center;
}

.signature-role {
  font-size: clamp(9px, 1.6vw, 11px);
  color: #475569;
  line-height: 1.1;
}


.signature.active {
  border-color: #5b4fe5;
  background: rgba(91, 79, 229, 0.18);
}

.signature.signed {
  cursor: not-allowed;
}

.signature-text.pending {
  font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  font-size: clamp(10px, 1.9vw, 12px);
  line-height: 1.1;
}


.signature-text.done {
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
  font-size: calc(var(--sig-height, 100px) * 0.26);
  line-height: 1;
  color: #1a75d1;
  transform: translateY(4px);
}


@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .preview-panel {
    min-height: 320px;
  }
}
</style>
