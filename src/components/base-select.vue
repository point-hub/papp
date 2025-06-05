<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { computed } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export interface BaseSelectOptionInterface {
  label: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type BaseSelectBorderType = 'none' | 'simple' | 'full'

export interface Props {
  modelValue: BaseSelectOptionInterface | undefined | null
  options: BaseSelectOptionInterface[]
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: BaseSelectBorderType
  layout?: BaseFormLayoutType
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  placeholder: 'Please select',
  required: false,
  disabled: false
})

const errors = defineModel<string[]>('errors')

const emit = defineEmits<{
  (e: 'update:modelValue', value: BaseSelectOptionInterface | undefined | null): void
}>()

const selected = computed<BaseSelectOptionInterface | undefined | null>({
  set: (option) => {
    emit('update:modelValue', option)
    if (errors.value?.length) errors.value = []
  },
  get: () => props.modelValue
})

const clearSelect = () => {
  if (!props.disabled) selected.value = null
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
  >
    <Listbox v-model="selected" :disabled="props.disabled">
      <div class="list-box">
        <ListboxButton
          class="list-box-button"
          :class="{
            'border-simple': border === 'simple',
            'border-full': border === 'full',
            'border-none': border === 'none'
          }"
          :data-testid="`${dataTestid}-input`"
        >
          <span v-if="!selected?.label" class="block text-slate-400">
            {{ props.placeholder }}
          </span>
          <span v-else class="block">{{ selected?.label }}</span>
          <span class="list-box-button-icon">
            <i v-if="!selected?.label" class="i-fas-angle-down block h-5 w-5 text-gray-400" />
            <i
              v-else
              class="i-fas-xmark block h-5 w-5 text-gray-400"
              @click="clearSelect()"
              :data-testid="`${dataTestid}-clear-button`"
            />
          </span>
        </ListboxButton>

        <transition>
          <ListboxOptions class="list-box-options">
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="(data, index) in options"
              :key="index"
              :value="data"
              as="template"
              :data-testid="`${dataTestid}-option-${data._id}`"
            >
              <li
                :class="[
                  active ? 'list-box-option-active' : 'list-box-option-inactive',
                  'list-box-option'
                ]"
              >
                <span :class="[selected ? 'font-extrabold' : 'font-normal', 'block ']">
                  {{ data.label }}
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
.list-box {
  @apply relative w-full cursor-pointer;
}
.list-box-button {
  @apply relative w-full  dark:border-slate-600  py-2 pl-3 pr-10 text-left focus-visible:border-indigo-500 sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-orange-300;
}
.list-box-button-icon {
  @apply absolute inset-y-0 right-0 flex items-center pr-2;
}
.list-box-options {
  @apply absolute dark:bg-slate-800 dark:border-slate-600 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm focus:outline-none z-1;
}
.list-box-option-active {
  @apply bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100;
}
.list-box-option-inactive {
  @apply text-gray-900 dark:text-gray-300;
}
.list-box-option {
  @apply relative select-none py-2 pl-4 pr-4;
}
</style>
