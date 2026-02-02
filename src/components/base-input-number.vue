<script setup lang="ts">
import Cleave from 'cleave.js'
import { onMounted, ref, watch } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

defineOptions({
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
  min?: number
  max?: number
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  autofocus?: boolean
  size?: string
  rounded?: boolean
  paddingless?: boolean
  resetErrorsOnUpdate?: boolean
  allowNegative?: boolean
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
  disabled: false,
  autofocus: false,
  rounded: false,
  resetErrorsOnUpdate: true,
  paddingless: false,
  allowNegative: false
})

/* ---------------- state ---------------- */

const inputRef = ref<HTMLInputElement | null>(null)
const cleave = ref<Cleave | null>(null)

const modelValue = defineModel<number | undefined>()
const errors = defineModel<string[]>('errors')

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | undefined): void
}>()

/* ---------------- helpers ---------------- */

const clamp = (value: number) => {
  if (props.min !== undefined && value < props.min) return props.min
  if (props.max !== undefined && value > props.max) return props.max
  return value
}

const selectAllText = () => {
  inputRef.value?.select()
}

/* ---------------- cleave ---------------- */

onMounted(() => {
  if (!inputRef.value) return

  cleave.value = new Cleave(inputRef.value, {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralDecimalScale: props.decimalLength,
    numeralDecimalMark: '.',
    delimiter: ',',
    numeralPositiveOnly: !props.allowNegative,
    onValueChanged
  })

  if (props.autofocus) {
    inputRef.value.focus()
  }

  // initial sync
  if (modelValue.value !== undefined) {
    cleave.value.setRawValue(String(modelValue.value))
  }

  fixPadding()

  setTimeout(() => {
    fixPadding()
  }, 1000)

})

const onValueChanged = (e: { target: { rawValue: string } }) => {
  if (!cleave.value) return

  const rawValue = e.target.rawValue

  // user typing "-"
  if (rawValue === '-' || rawValue === '') {
    emit('update:modelValue', undefined)
    return
  }

  const raw = Number(rawValue)
  if (Number.isNaN(raw)) {
    emit('update:modelValue', undefined)
    return
  }

  const clamped = clamp(raw)

  if (clamped !== raw) {
    cleave.value.setRawValue(String(clamped))
  }

  emit('update:modelValue', clamped)
}

/* ---------------- external sync ---------------- */

watch(
  () => modelValue.value,
  (val) => {
    if (!cleave.value) return

    if (val === undefined || val === null) {
      cleave.value.setRawValue('')
    } else {
      cleave.value.setRawValue(String(val))
    }
  }
)

const prefixRef = ref()
const suffixRef = ref()
const paddingLeft = ref(0)
const paddingRight = ref(0)

const fixPadding = () => {
  paddingLeft.value = prefixRef.value?.clientWidth === 0 ? 16 : prefixRef.value?.clientWidth
  paddingRight.value = suffixRef.value?.clientWidth === 0 ? 16 : suffixRef.value?.clientWidth
}

const clearError = () => {
  if (props.resetErrorsOnUpdate && errors.value?.length) {
    errors.value = []
  }
}

defineExpose({
  inputRef
})
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
    <input
      ref="inputRef"
      class="form-input"
      :class="{
        'text-right': align === 'right',
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none': border === 'none',
        'input-lg': size === 'lg',
        'rounded': rounded,
        'px-0!': paddingless
      }"
      :placeholder="placeholder"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :data-testid="dataTestid"
      @focus="selectAllText"
      @keyup="clearError"
      @keydown="clearError"
      :style="{
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`
      }"
    />

    <div
      ref="suffixRef" 
      class="absolute right-0 h-full flex items-center justify-center text-slate-400 dark:text-slate-300"
    >
      <slot name="suffix" />
    </div>

    <div
      ref="prefixRef" 
      class="absolute h-full flex items-center justify-center text-slate-400 dark:text-slate-300"
    >
      <slot name="prefix" />
    </div>
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
