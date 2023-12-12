<script setup lang="ts">
import { computed, ref } from 'vue'
import BaseForm, { type BaseFormLayoutType } from './base-form.vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot
} from '@headlessui/vue'

export type BaseAutocompleteBorderType = 'none' | 'simple' | 'full'

export interface BaseAutocompleteOptionInterface {
  label: string
  [key: string]: any
}

export interface Props {
  modelValue: BaseAutocompleteOptionInterface | null
  id?: string
  options: BaseAutocompleteOptionInterface[]
  label?: string
  description?: string
  placeholder?: string
  border?: BaseAutocompleteBorderType
  layout?: BaseFormLayoutType
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({ label: '' }),
  border: 'simple',
  layout: 'vertical',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: BaseAutocompleteOptionInterface | null): void
}>()

const selected = computed<BaseAutocompleteOptionInterface | null>({
  set: (obj: BaseAutocompleteOptionInterface | null) => {
    emit('update:modelValue', obj)
  },
  get: () => props.modelValue
})

let query = ref('')

let filtered = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((data) =>
        data.label
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)

const onClear = () => {
  if (!props.disabled) selected.value = null
}
</script>

<template>
  <component
    :is="BaseForm"
    :label="props.label"
    :layout="props.layout"
    :description="props.description"
    :required="props.required"
    :helpers="props.helpers"
    :errors="props.errors"
  >
    <Combobox v-model="selected">
      <div class="relative w-full mt-1">
        <div class="relative">
          <ComboboxInput
            class="form-input"
            autocomplete="off"
            :required="props.required"
            :disabled="props.disabled"
            :placeholder="placeholder"
            :class="{
              'border-simple': border === 'simple',
              'border-full': border === 'full',
              'border-none': border === 'none',
              'input-disabled': disabled
            }"
            :displayValue="(data) => (data as BaseAutocompleteOptionInterface).label"
            @change="query = $event.target.value"
          />
          <ComboboxButton
            v-if="Object.keys(selected ?? {}).length === 0"
            class="absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <i class="i-far-angle-down"></i>
          </ComboboxButton>
          <button
            type="button"
            v-if="Object.keys(selected ?? {}).length > 0"
            class="absolute inset-y-0 right-0 flex items-center pr-2"
            @click="onClear()"
          >
            <i class="i-far-xmark"></i>
          </button>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions class="options">
            <div
              v-if="filtered.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>

            <ComboboxOption
              v-for="data in filtered"
              as="template"
              :key="data.id"
              :value="data"
              v-slot="{ selected, active }"
            >
              <li
                class="option"
                :class="{
                  'option-active': active,
                  'option-inactive': !active
                }"
              >
                <span class="block" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ data.label }}
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </component>
</template>

<style scoped>
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
