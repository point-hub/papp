<script setup lang="ts">
import { computed, ref } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface BaseChoosenOptionInterface {
  label: string
  value: string
  [key: string]: unknown
}

export type BaseChoosenBorderType = 'none' | 'simple' | 'full'

export interface Props {
  id?: string
  type?: 'input' | 'text'
  title?: string
  label?: string
  description?: string
  placeholder?: string
  border?: BaseChoosenBorderType
  layout?: BaseFormLayoutType
  autofocus?: boolean
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  helpers?: string[]
  paddingless?: boolean
  dataTestid?: string

  /** options may be partial (pagination) */
  options?: BaseChoosenOptionInterface[]

  /** fallback when option not loaded yet */
  resolveOption?: (value: string) => BaseChoosenOptionInterface | undefined

  isLoading?: boolean
}

/* -------------------------------------------------------------------------- */
/* Props & Emits                                                               */
/* -------------------------------------------------------------------------- */

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  layout: 'horizontal',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false,
  paddingless: false,
  options: () => [],
  isLoading: false
})

const emit = defineEmits<{
  (e: 'select', option: BaseChoosenOptionInterface | undefined): void
}>()

/* -------------------------------------------------------------------------- */
/* Models (SOURCE OF TRUTH)                                                    */
/* -------------------------------------------------------------------------- */

const modelValue = defineModel<string | null>()
const search = defineModel<string>('search', { default: '' })
const errors = defineModel<string[]>('errors')

/* -------------------------------------------------------------------------- */
/* State                                                                      */
/* -------------------------------------------------------------------------- */

const showModal = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)
const modalRef = ref<{ isOpen: boolean } | null>(null)

/* -------------------------------------------------------------------------- */
/* Derived State (IMPORTANT PART)                                              */
/* -------------------------------------------------------------------------- */

/** real selected option (loaded OR fallback) */
const selectedOption = computed<BaseChoosenOptionInterface | undefined>(() => {
  if (!modelValue.value) return undefined

  return (
    props.options?.find(o => o.value === modelValue.value) ??
    props.resolveOption?.(modelValue.value)
  )
})

/** display label (derived, no logic leak) */
const selectedLabel = computed(() => selectedOption.value?.label ?? '')

/* -------------------------------------------------------------------------- */
/* Filtering                                                                  */
/* -------------------------------------------------------------------------- */

const filteredOptions = computed(() => {
  if (!search.value) return props.options ?? []

  const keyword = search.value.toLowerCase().replace(/\s+/g, '')
  return (props.options ?? []).filter(opt =>
    opt.label.toLowerCase().replace(/\s+/g, '').includes(keyword)
  )
})

/* -------------------------------------------------------------------------- */
/* Actions                                                                    */
/* -------------------------------------------------------------------------- */

function open() {
  if (props.readonly || props.disabled) return
  showModal.value = true
}

function close() {
  showModal.value = false
}

function select(option: BaseChoosenOptionInterface) {
  modelValue.value = option.value
  emit('select', option)
  close()
}

function clear() {
  modelValue.value = null
  search.value = ''
  emit('select', undefined)
  close()
}
</script>

<template>
  <base-form
    :label="label"
    :layout="layout"
    :description="description"
    :required="required"
    :helpers="helpers"
    :errors="errors"
    class="w-full"
  >
    <div 
      v-if="type === 'text'"
      @click="open"
      class="cursor-pointer"
      :class="{'text-blue-600': !disabled }"
    >
      {{ selectedLabel || 'Select' }}
    </div>
    <base-input
      v-else
      readonly
      :model-value="selectedLabel"
      @click="open"
      :border="border"
      :placeholder="placeholder"
      class="w-full"
      :data-testid="`${dataTestid}-input`"
      :paddingless="paddingless"
    />
  </base-form>

  <base-modal
    ref="modalRef"
    size="lg"
    :is-open="showModal"
    @on-close="close"
    :title="title"
  >
    <div class="flex flex-col h-full pb-4">
      <!-- Search -->
      <div class="flex gap-2">
        <base-input
          ref="inputRef"
          class="flex-1"
          placeholder="Search"
          border="full"
          v-model="search"
          autofocus
        />
        <base-button color="danger" @click="clear">
          CLEAR
        </base-button>
      </div>

      <!-- Options -->
      <div class="mt-3 flex-1 overflow-y-auto">
        <div v-if="isLoading" class="px-6 py-2 text-gray-500">
          Loading data…
        </div>

        <div
          v-else-if="filteredOptions.length === 0"
          class="px-6 py-2 text-gray-500"
        >
          Nothing found.
        </div>

        <div
          v-for="option in filteredOptions"
          :key="option.value"
          class="p-2 border-b border-b-slate-300 dark:border-b-slate-700 cursor-pointer hover:bg-blue-100 dark:hover:bg-slate-800"
          :class="{ 'bg-blue-200 dark:bg-slate-800': option.value === modelValue }"
          @click="select(option)"
        >
          <slot :option="option">
            {{ option.label }}
          </slot>
        </div>
      </div>
    </div>
  </base-modal>
</template>
