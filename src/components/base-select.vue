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
import { computed, onMounted, ref, watch } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseSelectBorderType = 'none' | 'simple' | 'full'

export interface BaseSelectOptionInterface {
  label?: string
  value?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface Props {
  id?: string
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
}

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  layout: 'horizontal',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false,
  paddingless: false
})

const selected = defineModel<BaseSelectOptionInterface | undefined>()
const selectedValue = defineModel<string | undefined>('selected-value')
const selectedLabel = defineModel<string | undefined>('selected-label')
const isLoading = defineModel<boolean>('isLoading', { default: false })
const search = defineModel<string>('search', { default: '' })
const errors = defineModel<string[]>('errors')

const filtered = computed(() => {
  if (!search.value) return props.options

  const q = search.value.toLowerCase().replace(/\s+/g, '')

  return props.options.filter(o =>
    o.label
      ?.toLowerCase()
      .replace(/\s+/g, '')
      .includes(q)
  )
})

const inputRef = ref<HTMLInputElement>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buttonRef = ref<any>(null)

onMounted(() => {
  if (props.autofocus) inputRef.value?.focus()
})

const onClear = () => {
  if (props.disabled) return

  selected.value = undefined
  selectedValue.value = undefined
  selectedLabel.value = undefined
}

const onInputClicked = () => {
  buttonRef.value?.el?.click()
}

watch(
  [() => selectedValue.value, () => props.options],
  ([val, options]) => {
    if (!val || !options?.length) {
      selected.value = undefined
      return
    }

    const sel = options.find(o => o.value === val)

    selected.value = sel
      ? { value: sel.value, label: sel.label }
      : undefined
  },
  { immediate: true }
)

watch(
  () => selected.value,
  val => {
    selectedValue.value = val?.value
    selectedLabel.value = val?.label

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
          <ComboboxInput ref="inputRef" class="form-input" @click="onInputClicked" autocomplete="off"
            :autofocus="props.autofocus" :required="props.required" :readonly="props.readonly"
            :disabled="props.disabled" :placeholder="placeholder" :class="{
              'border-simple': border === 'simple',
              'border-full': border === 'full',
              'border-none': border === 'none',
              'px-0!': paddingless,
            }" :displayValue="() => selected?.label ?? ''" @change="search = $event.target.value"
            :data-testid="`${dataTestid}-input`" />
          <ComboboxButton v-if="isEmpty(selected)" ref="buttonRef" class="absolute inset-y-0 right-1 flex items-center">
            <base-icon icon="i-fa7-regular:angle-down" />
          </ComboboxButton>
          <base-button v-else size="none" variant="text" type="button"
            class="absolute inset-y-0 right-1 flex items-center" @click="onClear()"
            :data-testid="`${dataTestid}-clear-button`">
            <base-icon icon="i-fa7-regular:xmark" />
          </base-button>
        </div>
        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
          @after-leave="search = ''">
          <ComboboxOptions class="options">
            <div v-if="isLoading  && filtered.length === 0 && search !== ''" class="relative cursor-default select-none px-4 py-2 text-gray-700">
              Loading data...
            </div>
            <div v-if="!isLoading && filtered.length === 0 && search !== ''"
              class="relative cursor-default select-none px-4 py-2 text-gray-700">
              Nothing found.
            </div>
            <template v-if="!isLoading">
              <ComboboxOption v-for="data in filtered" as="template" :key="data._id" :value="data"
                v-slot="{ selected, active }" :data-testid="`${dataTestid}-option-${data._id}`">
                <li class="option" :class="{
                  'option-active': active,
                  'option-inactive': !active
                }">
                  <span class="block" :class="{ 'font-medium': selected, 'font-normal': !selected }">
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
