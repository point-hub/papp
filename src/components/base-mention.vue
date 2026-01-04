<script setup lang="ts">
import getCaretCoordinates from 'textarea-caret'
import { computed, nextTick, onMounted, ref, watch } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseMentionBorderType = 'simple' | 'full' | 'none'

export interface IMentionOption {
  id: number | string
  label: string
  avatar_url?: string
  link?: string
}
export type MentionOptionsMap = Record<string, IMentionOption[]>

export interface Props {
  /* Base Form props */
  modelValue: string
  id?: string
  label?: string
  description?: string
  placeholder?: string
  debounceTimer?: number
  border?: BaseMentionBorderType
  layout?: BaseFormLayoutType
  maxlength?: number
  showAvatar?: boolean
  autofocus?: boolean
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  helpers?: string[]
  minHeight?: number
  maxHeight?: number
  dataTestid?: string

  /* Mention props */
  options: MentionOptionsMap
  triggers?: string[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false,
  showAvatar: true,
  options: () => ({}),
  triggers: () => ['@'],
  debounceTimer: 300,
  loading: false
})

const errors = defineModel<string[]>('errors')

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:mentions', mentions: IMentionOption[]): void
  (e: 'search', payload: { trigger: string; query: string }): void
  (e: 'showSuggestions', value: boolean): void
}>()

let searchTimer: ReturnType<typeof setTimeout> | null = null
const debouncedSearch = (payload: { trigger: string; query: string }) => {
  if (searchTimer) clearTimeout(searchTimer)

  searchTimer = setTimeout(() => {
    emit('search', payload)
  }, props.debounceTimer)
}

/* Value binding */
const value = computed({
  get: () => props.modelValue,
  set: (text: string) => {
    emit('update:modelValue', text)
    if (errors.value?.length) errors.value = []
    resize()
  }
})

/* Auto-resize */
const height = ref(0)
const textareaRef = ref<HTMLTextAreaElement>()
function resize() {
  height.value = 0
  nextTick(() => {
    height.value = textareaRef.value?.scrollHeight ?? 0
  })
}
watch(value, resize)

onMounted(() => {
  if (props.autofocus) textareaRef.value?.focus()
  resize()
})

/* Mention states */
const dropdownPos = ref({ top: 0, left: 0 })
const showSuggestions = ref(false)
const activeIndex = ref(0)
const triggerChar = ref<string | null>(null)
const triggerIndex = ref(-1)
const query = ref('')

/* Filter options reactively */
const filteredOptions = computed(() => {
  if (!triggerChar.value) return []
  return (props.options[triggerChar.value] || []).filter((o) =>
    o.label.toLowerCase().includes(query.value.toLowerCase())
  )
})

function updateDropdownPosition() {
  if (!textareaRef.value || triggerIndex.value < 0) return
  const caret = getCaretCoordinates(textareaRef.value, triggerIndex.value)
  dropdownPos.value = {
    top: caret.top - textareaRef.value.scrollTop + caret.height,
    left: caret.left - textareaRef.value.scrollLeft
  }
}

function onInput(e: Event) {
  const el = e.target as HTMLTextAreaElement
  const pos = el.selectionStart
  const textBefore = value.value.slice(0, pos)
  const regex = new RegExp(`([${props.triggers.join('')}])(\\w*)$`)
  const match = textBefore.match(regex)

  if (match) {
    triggerChar.value = match[1]!
    triggerIndex.value = pos - match[2]!.length - 1
    query.value = match[2]!

    debouncedSearch({
      trigger: triggerChar.value,
      query: query.value
    })

    showSuggestions.value = true
    emit('showSuggestions', true)
    nextTick(updateDropdownPosition)
  } else {
    resetMention()
  }
}

function onKeydown(e: KeyboardEvent) {
  if (!showSuggestions.value || !filteredOptions.value.length) return
  if (['ArrowDown', 'ArrowUp', 'Enter', 'Escape'].includes(e.key)) e.preventDefault()
  if (e.key === 'ArrowDown') activeIndex.value = (activeIndex.value + 1) % filteredOptions.value.length
  if (e.key === 'ArrowUp') activeIndex.value = (activeIndex.value - 1 + filteredOptions.value.length) % filteredOptions.value.length
  if (e.key === 'Enter') selectMention(filteredOptions.value[activeIndex.value]!)
  if (e.key === 'Escape') resetMention()
}

function selectMention(option: IMentionOption) {
  if (!triggerChar.value || triggerIndex.value < 0) return
  const before = value.value.slice(0, triggerIndex.value)
  const after = value.value.slice(triggerIndex.value + query.value.length + 1)
  value.value = `${before}${triggerChar.value}${option.label} ${after}`
  resetMention()
  nextTick(() => {
    textareaRef.value?.focus()
    const pos = before.length + option.label.length + 2
    textareaRef.value?.setSelectionRange(pos, pos)
  })
}

function resetMention() {
  if (searchTimer) {
    clearTimeout(searchTimer)
    searchTimer = null
  }

  showSuggestions.value = false
  emit('showSuggestions', false)
  triggerIndex.value = -1
  query.value = ''
  triggerChar.value = null
  activeIndex.value = 0
}

/* Mentions extraction */
watch(value, () => {
  const mentions: IMentionOption[] = []
  for (const char of props.triggers) {
    const regex = new RegExp(`\\${char}(\\w+)`, 'g')
    const matches = Array.from(value.value.matchAll(regex)).map((m) => m[1]?.toLowerCase())
    const opts = props.options[char] || []
    mentions.push(...opts.filter((o) => matches.includes(o.label.toLowerCase())))
  }
  emit('update:mentions', mentions)
})

defineExpose({ textareaRef })
</script>

<template>
  <base-form :label="props.label" :layout="props.layout" :description="props.description" :required="props.required"
    :helpers="props.helpers" :errors="errors">
    <div class="relative w-full">
      <textarea ref="textareaRef" v-model="value" :id="id" :placeholder="placeholder" :autofocus="autofocus"
        :required="required" :readonly="readonly" :disabled="disabled" :maxlength="maxlength"
        class="form-input resize-none px-2" :class="{
          'border-simple': border === 'simple',
          'border-full': border === 'full',
          'border-none px-0!': border === 'none',
          'overflow-hidden': !maxHeight
        }" :style="{
          height: height + 'px',
          minHeight: minHeight ? minHeight + 'px' : 'inherit',
          maxHeight: maxHeight ? maxHeight + 'px' : 'inherit'
        }" :data-testid="dataTestid" @input="onInput" @keydown="onKeydown" @blur="resetMention" />

      <!-- Suggestions dropdown -->
      <ul v-if="showSuggestions"
        class="absolute bg-white dark:bg-gray-900 border dark:border-gray-500 rounded shadow p-1 z-10 w-48"
        :style="{ top: `${dropdownPos.top}px`, left: `${dropdownPos.left}px` }">
        <li v-if="loading" class="p-1 text-gray-400 italic">Searching...</li>
        <li v-else-if="!filteredOptions.length" class="p-1 text-gray-400 italic">No results</li>
        <template v-if="!loading">
          <li v-for="(opt, i) in filteredOptions" :key="opt.id" :class="[
            'p-1 cursor-pointer flex items-center gap-1',
            i === activeIndex ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700',
          ]" @click="selectMention(opt)">
            <base-avatar v-if="props.showAvatar" :size="24" :src="opt.avatar_url" /> {{ opt.label }}
          </li>
        </template>
      </ul>
    </div>
  </base-form>
</template>

<style scoped>
@import url("../assets/css/components/input.css");
</style>
