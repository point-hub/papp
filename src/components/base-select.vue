<script setup lang="ts">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot
} from '@headlessui/vue'
import { computed, onMounted, ref } from 'vue'

import type { BaseFormLayoutType } from './base-form.vue'

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type BaseSelectBorderType = 'none' | 'simple' | 'full'

export interface BaseSelectOptionInterface {
  label: string
  value: string
  [key: string]: unknown
}

export interface Props {
  options: BaseSelectOptionInterface[]
  label?: string
  description?: string
  placeholder?: string
  border?: BaseSelectBorderType
  layout?: BaseFormLayoutType
  autofocus?: boolean
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  paddingless?: boolean
  helpers?: string[]
  dataTestid?: string
  isLoading?: boolean

  /** fallback when option not loaded (pagination / cached value) */
  resolveOption?: (value: string) => BaseSelectOptionInterface | undefined
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
  isLoading: false
})

const emit = defineEmits<{
  (e: 'select', option: BaseSelectOptionInterface | undefined): void
}>()

/* -------------------------------------------------------------------------- */
/* Model (SOURCE OF TRUTH)                                                     */
/* -------------------------------------------------------------------------- */

const modelValue = defineModel<string | null>()
const search = defineModel<string>('search', { default: '' })
const errors = defineModel<string[]>('errors')

/* -------------------------------------------------------------------------- */
/* Refs                                                                      */
/* -------------------------------------------------------------------------- */

const inputEl = ref<HTMLInputElement | null>(null)

/* -------------------------------------------------------------------------- */
/* Selected / Display Logic (IMPORTANT PART)                                   */
/* -------------------------------------------------------------------------- */

/** real option from loaded list */
const selectedOption = computed<BaseSelectOptionInterface | null>(() => {
  if (!modelValue.value) return null

  return (
    props.options.find(o => o.value === modelValue.value) ??
    props.resolveOption?.(modelValue.value) ??
    null
  )
})

/** display formatter required by HeadlessUI */
function displayValue(item: unknown): string {
  if (
    typeof item === 'object' &&
    item !== null &&
    'label' in item
  ) {
    return (item as BaseSelectOptionInterface).label
  }

  return ''
}


/* -------------------------------------------------------------------------- */
/* Filtering                                                                  */
/* -------------------------------------------------------------------------- */

const filteredOptions = computed(() => {
  if (!search.value) return props.options

  const q = search.value.toLowerCase().replace(/\s+/g, '')
  return props.options.filter(o =>
    o.label.toLowerCase().replace(/\s+/g, '').includes(q)
  )
})

/* -------------------------------------------------------------------------- */
/* Lifecycle                                                                  */
/* -------------------------------------------------------------------------- */

onMounted(() => {
  if (props.autofocus) inputEl.value?.focus()
})

/* -------------------------------------------------------------------------- */
/* Actions                                                                    */
/* -------------------------------------------------------------------------- */

function select(option: BaseSelectOptionInterface) {
  modelValue.value = option.value ?? null
  emit('select', option)
  if (errors.value?.length) errors.value = []
}

function clear() {
  if (props.disabled) return
  modelValue.value = null
}

function focus() {
  inputEl.value?.focus()
}

/* -------------------------------------------------------------------------- */
/* Expose                                                                    */
/* -------------------------------------------------------------------------- */

defineExpose({ focus })
</script>

<template>
  <base-form
    :label="label"
    :layout="layout"
    :description="description"
    :required="required"
    :helpers="helpers"
    :errors="errors"
  >
    <Combobox
      :model-value="selectedOption"
      @update:model-value="select"
    >
      <div class="relative w-full">
        <div class="relative">
          <ComboboxInput
            ref="inputEl"
            class="form-input"
            autocomplete="off"
            :placeholder="placeholder"
            :displayValue="displayValue"
            @input="search = ($event.target as HTMLInputElement).value"
            :data-testid="`${dataTestid}-input`"
          />

          <ComboboxButton
            v-if="!modelValue"
            class="absolute inset-y-0 right-1 flex items-center"
          >
            <base-icon icon="i-fa7-regular:angle-down" />
          </ComboboxButton>

          <base-button
            v-else
            size="none"
            variant="text"
            type="button"
            class="absolute inset-y-0 right-1 flex items-center"
            @click="clear"
          >
            <base-icon icon="i-fa7-regular:xmark" />
          </base-button>
        </div>

        <TransitionRoot @after-leave="search = ''">
          <ComboboxOptions class="options">
            <div
              v-if="isLoading && filteredOptions.length === 0"
              class="px-4 py-2 text-gray-500"
            >
              Loading data…
            </div>

            <div
              v-else-if="!isLoading && filteredOptions.length === 0"
              class="px-4 py-2 text-gray-500"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="opt in filteredOptions"
              :key="opt.value"
              :value="opt"
              v-slot="{ active, selected }"
            >
              <li
                class="option"
                :class="{
                  'option-active': active,
                  'font-medium': selected
                }"
              >
                {{ opt.label }}
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
.options {
  @apply absolute dark:bg-slate-800 dark:border-slate-600 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm focus:outline-none z-1;
}

.option {
  @apply relative cursor-pointer select-none py-2 px-4;
}

.option-active {
  @apply bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100;
}

.option-inactive {
  @apply text-gray-900 dark:text-gray-300;
}
</style>
