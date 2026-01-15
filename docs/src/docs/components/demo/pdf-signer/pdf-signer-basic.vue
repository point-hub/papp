<script setup lang="ts">
import { computed, ref } from 'vue'
import { SignPdf } from '@point-hub/papp'
import { createClient } from '@supabase/supabase-js'
import { getApps, initializeApp } from 'firebase/app'
import { collection, doc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore'

type DemoUser = { id: string; name: string; initials: string; role: string; label: string }
type SignaturePayload = {
  id: string
  x: number
  y: number
  width: number
  height: number
  page: number
  userId: string | number | null
  signed: boolean
}

const demoUsers: DemoUser[] = [
  { id: 'alya', name: 'Alya Rahma', initials: 'AR', role: 'Approval', label: 'Menyetujui' },
  { id: 'dimas', name: 'Dimas Pratama', initials: 'DP', role: 'Approval', label: 'Mengetahui' },
  { id: 'nadia', name: 'Nadia Kusuma', initials: 'NK', role: 'Viewer', label: 'Pemeriksa' }
]

const currentUserId = ref(demoUsers[0]?.id ?? '')
const currentUser = computed(
  () => demoUsers.find((user) => user.id === currentUserId.value) ?? demoUsers[0]
)
const pdfSignerRef = ref<{
  getSignatures?: () => SignaturePayload[]
  getDocumentId?: () => string | null
  lockPositions?: () => void
} | null>(null)
const isSaving = ref(false)
const saveError = ref('')
const configError = ref('')
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabaseBucket = import.meta.env.VITE_SUPABASE_BUCKET
const supabase =
  supabaseUrl && supabaseKey
    ? createClient(supabaseUrl, supabaseKey)
    : null

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}
const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean)
const firebaseApp = hasFirebaseConfig ? (getApps().length ? getApps()[0] : initializeApp(firebaseConfig)) : null
const firestore = firebaseApp ? getFirestore(firebaseApp) : null

if (!supabaseUrl || !supabaseKey || !supabaseBucket) {
  configError.value = 'Supabase env belum lengkap. Pastikan VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_SUPABASE_BUCKET terisi.'
} else if (!hasFirebaseConfig) {
  configError.value = 'Firebase env belum lengkap. Pastikan VITE_FIREBASE_* terisi.'
}

const uploadPdf = async (file: File) => {
  if (!supabase) {
    throw new Error('Supabase belum dikonfigurasi.')
  }
  const safeName = file.name.replace(/[^\w.-]+/g, '-')
  const storagePath = `original/${Date.now()}-${safeName}`
  const { error } = await supabase.storage.from(supabaseBucket).upload(storagePath, file, {
    upsert: true,
    contentType: file.type
  })
  if (error) {
    throw error
  }
  const { data } = supabase.storage.from(supabaseBucket).getPublicUrl(storagePath)
  if (!data?.publicUrl) {
    throw new Error('Gagal membuat public URL untuk PDF.')
  }
  return {
    pdfUrl: data.publicUrl,
    fileUrl: `storage/${supabaseBucket}/${storagePath}`,
    fileName: file.name
  }
}

const createDocument = async ({
  title,
  fileUrl,
  ownerId
}: {
  title: string
  fileUrl?: string
  ownerId: string | number | null
}) => {
  if (!firestore) {
    throw new Error('Firestore belum dikonfigurasi.')
  }
  const documentRef = doc(collection(firestore, 'documents'))
  await setDoc(documentRef, {
    title,
    fileUrl: fileUrl ?? '',
    ownerId: ownerId ?? '',
    status: 'in_progress',
    createdAt: serverTimestamp()
  })
  return documentRef.id
}

const saveSignatureField = async ({
  docId,
  signature
}: {
  docId: string | null
  signature: SignaturePayload
}) => {
  if (!docId) {
    throw new Error('Document ID belum tersedia.')
  }
  if (!firestore) {
    throw new Error('Firestore belum dikonfigurasi.')
  }
  const fieldRef = doc(firestore, 'signature_fields', signature.id)
  await setDoc(
    fieldRef,
    {
      docId,
      page: signature.page,
      x: signature.x,
      y: signature.y,
      width: signature.width,
      height: signature.height,
      assignedTo: signature.userId ?? currentUser.value.id,
      signed: signature.signed ?? false,
      signedAt: signature.signed ? serverTimestamp() : null,
      imageUrl: null
    },
    { merge: true }
  )
}

const persistence = {
  uploadPdf,
  createDocument,
  saveSignatureField
}

const saveAllSignatureFields = async () => {
  const docId = pdfSignerRef.value?.getDocumentId?.() ?? null
  if (!docId) {
    saveError.value = 'Dokumen belum dibuat. Upload PDF dulu.'
    return
  }
  const signatures = pdfSignerRef.value?.getSignatures?.() ?? []
  if (signatures.length === 0) {
    saveError.value = 'Belum ada signature field untuk disimpan.'
    return
  }
  saveError.value = ''
  isSaving.value = true
  try {
    await Promise.all(
      signatures.map((signature) =>
        persistence.saveSignatureField({
          docId,
          signature
        })
      )
    )
  } catch (error) {
    saveError.value = error instanceof Error ? error.message : 'Gagal menyimpan signature fields.'
  } finally {
    isSaving.value = false
  }
  if (!saveError.value) {
    pdfSignerRef.value?.lockPositions?.()
  }
}
</script>

<template>
  <Demo>
    <div class="mb-4 grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg">
      <div class="flex flex-wrap items-center gap-3 justify-between">
        <div class="flex flex-col gap-1">
          <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">User Aktif</span>
          <select
            v-model="currentUserId"
            class="w-fit rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm"
          >
            <option v-for="user in demoUsers" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        <div class="ml-auto">
          <button
            type="button"
            class="rounded-xl px-4 py-2 text-sm font-semibold text-dark shadow-md transition disabled:opacity-60"
            :disabled="isSaving"
            @click="saveAllSignatureFields"
          >
            Simpan Signature Fields
          </button>
        </div>
      </div>
      <p v-if="configError" class="text-sm font-medium text-red-600">{{ configError }}</p>
      <p v-if="saveError" class="text-sm font-medium text-red-600">{{ saveError }}</p>
    </div>
    <SignPdf
      ref="pdfSignerRef"
      :users="demoUsers"
      :current-user="currentUser"
      :persistence="persistence"
      :enable-upload="true"
    />
  </Demo>
</template>
