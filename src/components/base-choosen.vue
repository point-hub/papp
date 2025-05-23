<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'

interface IOption {
  [key: string]: unknown
  label: string
}

import { isEmpty } from '@point-hub/js-utils'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseChoosenBorderType = 'none' | 'simple' | 'full'

export interface Props {
  id?: string
  mode?: 'input' | 'text'
  title?: string
  label?: string
  description?: string
  placeholder?: string
  border?: BaseChoosenBorderType
  layout?: BaseFormLayoutType
  autofocus?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'input',
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  disabled: false
})

const input = defineModel()
const isLoading = defineModel<boolean>('isLoading')
const selected = defineModel<IOption>('selected')
const search = defineModel<string>('search', { default: '' })
const options = defineModel<IOption[]>('options')
const errors = defineModel<string[]>('errors')

const showModal = ref(false)
const inputRef = ref()
const modalRef = ref()

// focus on search text when modal opened
watch(
  () => modalRef.value?.isOpen,
  () => {
    if (modalRef.value.isOpen) {
      nextTick(() => {
        inputRef.value.inputRef.focus()
      })
    }
  }
)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const filtered = computed<any>(() => {
  if (!search.value || search.value === '') {
    return options.value
  }

  return options.value?.filter((data) =>
    data.label
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(search.value.toLowerCase().replace(/\s+/g, ''))
  )
})

const onSelect = (option: IOption) => {
  selected.value = option
  input.value = option.label
  onClose()
}

const onClear = () => {
  input.value = ''
  search.value = ''
  onClose()
}

watch(
  selected,
  () => {
    if (isEmpty(selected.value?.label)) {
      input.value = ''
      search.value = ''
    } else {
      input.value = selected.value?.label ?? ''
      search.value = selected.value?.label ?? ''
    }
    if (errors.value?.length) errors.value = []
  },
  { immediate: true }
)

const onOpen = () => {
  showModal.value = true
}

const onClose = () => {
  showModal.value = false
}
</script>

<template>
  <base-form
    :label="props.label"
    :layout="props.layout"
    :description="props.description"
    :required="props.required"
    :helpers="props.helpers"
    :errors="errors"
    class="w-full"
  >
    <!-- mode: input -->
    <base-input
      v-if="mode === 'input'"
      readonly
      v-model="input"
      @click="onOpen"
      :border="border"
      :placeholder="placeholder"
      class="w-full"
    />
    <!-- mode: text -->
    <div
      v-if="mode === 'text'"
      class="border-b border-dashed cursor-pointer border-black dark:border-white"
      @click="onOpen"
    >
      {{ selected && !isEmpty(selected.label) ? selected.label : 'SELECT' }}
    </div>
  </base-form>

  <base-modal ref="modalRef" size="lg" :is-open="showModal" @on-close="onClose">
    <div class="max-h-90vh h-full flex flex-col py-4">
      <!-- Title -->
      <h2 class="py-4 px-8 text-2xl font-bold">{{ props.title }}</h2>
      <!-- Search Text -->
      <div class="px-8 py-2 relative">
        <base-input placeholder="Search" ref="inputRef" border="full" v-model="search" />
        <base-button class="absolute right-9.2 top-3.2 px-1!" variant="filled" color="danger">
          <base-icon icon="i-fas-xmark" @click="onClear" />
        </base-button>
      </div>
      <!-- Options -->
      <div class="space-y-8 flex flex-col h-full overflow-y-auto">
        <div class="flex flex-col w-full">
          <div v-if="isLoading" class="relative cursor-default select-none px-8 py-2 text-gray-700">
            Loading data...
          </div>
          <div
            v-if="!isLoading && filtered.length === 0"
            class="relative cursor-default select-none px-8 py-2 text-gray-700"
          >
            Nothing found.
          </div>
          <div
            v-for="(option, index) in filtered"
            :key="index"
            class="py-4 px-8 border-b dark:border-b-slate-800 hover:bg-blue-100 dark:hover-bg-slate-800 cursor-pointer"
            @click="onSelect(option)"
          >
            <slot :option="option">{{ option?.label }}</slot>
          </div>
        </div>
      </div>
    </div>
  </base-modal>
</template>
