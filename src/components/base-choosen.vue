<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'

interface IOption {
  [key: string]: unknown
  label: string
  value: string
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
  readonly?: boolean
  disabled?: boolean
  helpers?: string[]
  paddingless?: boolean
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'input',
  border: 'full',
  layout: 'horizontal',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false,
  paddingless: false
})

const input = defineModel()
const isLoading = defineModel<boolean>('isLoading')
const selected = defineModel<IOption>('selected')
const search = defineModel<string>('search', { default: '' })
const options = defineModel<IOption[]>('options')
const errors = defineModel<string[]>('errors')

const selectedLabel = defineModel('selected-label')
const selectedValue = defineModel('selected-value')

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
  selected.value = undefined
  selectedLabel.value = ''
  selectedValue.value = ''
  search.value = ''
  onClose()
}

watch(
  selected,
  () => {
    input.value = selected.value?.label ?? ''
    selectedLabel.value = selected.value?.label ?? ''
    selectedValue.value = selected.value?.value ?? ''
    if (errors.value?.length) errors.value = []
  },
  { immediate: true }
)


watch(
  () => selectedValue.value,
  (val) => {
    selected.value = options.value?.find(o => o.value === val)
  },
  { immediate: true }
)

const onOpen = () => {
  if (props.readonly || props.disabled) {
    return
  }
  showModal.value = true
}

const onClose = () => {
  showModal.value = false
}
</script>

<template>
  <base-form :label="props.label" :layout="props.layout" :description="props.description" :required="props.required"
    :helpers="props.helpers" :errors="errors" class="w-full">
    <!-- mode: input -->
    <base-input v-if="mode === 'input'" readonly v-model="input" @click="onOpen" :border="border"
      :placeholder="placeholder" class="w-full" :data-testid="`${dataTestid}-input`" :paddingless="paddingless" />
    <!-- mode: text -->
    <div v-if="mode === 'text'" class="border-b border-dashed cursor-pointer border-black dark:border-white"
      @click="onOpen" :data-testid="`${dataTestid}-input`">
      {{ selected && !isEmpty(selected.label) ? selected.label : 'SELECT' }}
    </div>
  </base-form>

  <base-modal ref="modalRef" size="lg" :is-open="showModal" @on-close="onClose" :title="props.title">
    <div class="max-h-90vh h-full flex flex-col pb-4">
      <!-- Search Text -->
      <div class="flex w-full">
        <base-input class="flex-1" placeholder="Search" ref="inputRef" border="full" v-model="search"
          :data-testid="`${dataTestid}-search`">
          <template #suffix>
          </template>
        </base-input>
        <base-button color="danger" :data-testid="`${dataTestid}-clear-button`" @click="onClear">
          CLEAR
        </base-button>
      </div>
      <!-- Options -->
      <div class="gap-4 mt-3 flex flex-col h-full overflow-y-auto">
        <div class="flex flex-col w-full">
          <div v-if="isLoading" class="relative cursor-default select-none px-6 py-2 text-gray-700">
            Loading data...
          </div>
          <div v-if="!isLoading && filtered.length === 0"
            class="relative cursor-default select-none px-6 py-2 text-gray-700">
            Nothing found.
          </div>
          <div v-for="(option, index) in filtered" :key="index"
            class="p-2 border-b border-slate-200 first:border-t dark:border-b-slate-800 dark:border-t-slate-800 hover:bg-blue-100 dark:hover-bg-slate-800 cursor-pointer"
            :class="{ 'bg-blue-200 dark:bg-slate-700': option?.value === selected?.value }" @click="onSelect(option)"
            :data-testid="`${dataTestid}-option-${option._id}`">
            <slot :option="option">{{ option?.label }}</slot>
          </div>
        </div>
      </div>
    </div>
  </base-modal>
</template>

<style lang="postcss" scope>
.form-input:read-only {
  @apply !hover:cursor-pointer !text-slate-900 !dark:text-slate-100;
}
</style>