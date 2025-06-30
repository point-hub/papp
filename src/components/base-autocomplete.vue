<script setup lang="ts">
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot
} from '@headlessui/vue'
import { isEmpty } from '@point-hub/js-utils'
import { computed, ref } from 'vue'
import { watch } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseAutocompleteBorderType = 'none' | 'simple' | 'full'

export interface BaseAutocompleteOptionInterface {
  label?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface Props {
  id?: string
  options: BaseAutocompleteOptionInterface[]
  label?: string
  description?: string
  placeholder?: string
  border?: BaseAutocompleteBorderType
  layout?: BaseFormLayoutType
  autofocus?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  dataTestid?: string
}

const selectedLabel = defineModel('selected-label')
const selectedValue = defineModel('selected-value')

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  disabled: false
})

const selected = defineModel<BaseAutocompleteOptionInterface>()
const isLoading = defineModel<boolean>('isLoading', { default: false })
const query = defineModel<string>('query', { default: '' })
const errors = defineModel<string[]>('errors')

const filtered = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter((data) =>
        data?.label
          ?.toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)

const onClear = () => {
  if (!props.disabled) {
    selected.value = undefined
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buttonRef = ref<any>(null)
const onInputClicked = () => {
  if (buttonRef.value) {
    buttonRef.value.el.click()
  }
}

const inputRef = ref()

watch(
  () => selected.value,
  () => {
    selectedLabel.value = selected.value?.label ?? ""
    selectedValue.value = selected.value?.value ?? ""
    if (errors.value?.length) errors.value = []
  }
)

defineExpose({
  inputRef
})
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
    <Combobox v-model="selected">
      <div class="relative w-full">
        <div class="relative">
          <ComboboxInput
            ref="inputRef"
            class="form-input"
            @click="onInputClicked"
            autocomplete="off"
            :autofocus="props.autofocus"
            :required="props.required"
            :disabled="props.disabled"
            :placeholder="placeholder"
            :class="{
              'border-simple': border === 'simple',
              'border-full': border === 'full',
              'border-none px-0!': border === 'none'
            }"
            :displayValue="() => selected?.label ?? ''"
            @change="query = $event.target.value"
            :data-testid="`${dataTestid}-input`"
          />
          <ComboboxButton
            v-if="isEmpty(selected)"
            ref="buttonRef"
            class="absolute inset-y-0 right-1 flex items-center"
          >
            <base-icon icon="i-far-angle-down" />
          </ComboboxButton>
          <base-button
            v-else
            size="none"
            variant="text"
            type="button"
            class="absolute inset-y-0 right-1 flex items-center"
            @click="onClear()"
            :data-testid="`${dataTestid}-clear-button`"
          >
            <base-icon icon="i-far-xmark" />
          </base-button>
        </div>
        <TransitionRoot
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          @after-leave="query = ''"
        >
          <ComboboxOptions class="options">
            <div
              v-if="isLoading"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Loading data...
            </div>
            <div
              v-if="!isLoading && filtered.length === 0 && query !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700"
            >
              Nothing found.
            </div>
            <template v-if="!isLoading">
              <ComboboxOption
                v-for="data in filtered"
                as="template"
                :key="data._id"
                :value="data"
                v-slot="{ selected, active }"
                :data-testid="`${dataTestid}-option-${data._id}`"
              >
                <li
                  class="option"
                  :class="{
                    'option-active': active,
                    'option-inactive': !active
                  }"
                >
                  <span
                    class="block"
                    :class="{ 'font-medium': selected, 'font-normal': !selected }"
                  >
                    {{ data.label }}
                  </span>
                </li>
              </ComboboxOption>
            </template>
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
