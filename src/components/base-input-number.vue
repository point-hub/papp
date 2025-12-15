<script setup lang="ts">
import Cleave from 'cleave.js'
import { computed, onMounted, ref } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

defineOptions({
  // This disables auto-inheriting attrs on the root element
  inheritAttrs: false
})

export type BaseInputNumberBorderType = 'none' | 'simple' | 'full'

export interface Props {
  id?: string
  name?: string
  label?: string
  align?: 'left' | 'right'
  description?: string
  placeholder?: string
  border?: BaseInputNumberBorderType
  layout?: BaseFormLayoutType
  decimalLength?: number
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  autofocus?: boolean
  size?: string
  rounded?: boolean
  paddingless?: boolean

  /**
   * Clearing or resetting errors when an update or change occurs.
   *
   * @default true
   */
  resetErrorsOnUpdate?: boolean
  helpers?: string[]
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  decimalLength: 0,
  align: 'right',
  border: 'full',
  layout: 'horizontal',
  required: false,
  readonly: false,
  autofocus: false,
  disabled: false,
  rounded: false,
  resetErrorsOnUpdate: true,
  paddingless: false
})

const cleave = ref()
const inputRef = ref()

const selectAllText = () => {
  inputRef.value.select()
}

const prefixRef = ref()
const suffixRef = ref()
const paddingLeft = ref(0)
const paddingRight = ref(0)

onMounted(() => {
  cleave.value = new Cleave(inputRef.value, {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralDecimalScale: props.decimalLength,
    onValueChanged: onValueChanged
  })

  if (props.autofocus) inputRef.value?.focus()

  fixPadding()

  setTimeout(() => {
    fixPadding()
  }, 1000)
})

const fixPadding = () => {
  paddingLeft.value = prefixRef.value?.clientWidth === 0 ? 16 : prefixRef.value?.clientWidth
  paddingRight.value = suffixRef.value?.clientWidth === 0 ? 16 : suffixRef.value?.clientWidth
}

const modelValue = defineModel<string | number>()
const errors = defineModel<string[]>('errors')

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const onValueChanged = (e: { target: { rawValue: number } }) => {
  emit('update:modelValue', Number(e.target.rawValue))
  /**
   * Reset errors value when props resetErrorsOnUpdate value is true and errors value is not empty
   */
  if (props.resetErrorsOnUpdate === true && errors.value?.length) {
    errors.value = []
  }
}

const inputValue = computed({
  set: () => { },
  get: () =>
    modelValue.value
      ? new Intl.NumberFormat('en-US', {
        maximumFractionDigits: props.decimalLength
      }).format(modelValue.value as number)
      : ''
})

defineExpose({
  inputRef
})
</script>

<template>
  <base-form :label="props.label" :layout="props.layout" :description="props.description" :required="props.required"
    :helpers="props.helpers" :errors="errors">
    <input ref="inputRef" class="form-input" :class="{
      'text-right': align === 'right',
      'border-simple': border === 'simple',
      'border-full': border === 'full',
      'border-none': border === 'none',
      'input-lg': size === 'lg',
      'rounded': rounded,
      'px-0!': paddingless
    }" v-model="inputValue" :placeholder="props.placeholder" :autofocus="props.autofocus" :required="props.required"
      :readonly="props.readonly" :disabled="props.disabled" :data-testid="props.dataTestid" @click="selectAllText"
      :style="{
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`
      }" />
    <div ref="suffixRef"
      class="absolute right-0 h-full flex items-center justify-center text-slate-400 dark:text-slate-300">
      <slot name="suffix"></slot>
    </div>
    <div ref="prefixRef" class="absolute h-full flex items-center justify-center text-slate-400 dark:text-slate-300">
      <slot name="prefix"></slot>
    </div>
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
