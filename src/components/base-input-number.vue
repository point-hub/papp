<script setup lang="ts">
import { type BaseFormLayoutType, BaseForm } from '@point-hub/papp'
import Cleave from 'cleave.js'
import { computed, onMounted, ref } from 'vue'

export type BaseInputNumberBorderType = 'none' | 'simple' | 'full'

export interface Props {
  id?: string
  label?: string
  align?: 'left' | 'right'
  description?: string
  placeholder?: string
  border?: BaseInputNumberBorderType
  layout?: BaseFormLayoutType
  decimalLength: number
  autofocus?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  decimalLength: 0,
  align: 'right',
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  disabled: false
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

  if (props.border === 'full' || prefixRef.value.clientWidth) {
    paddingLeft.value = prefixRef.value.clientWidth === 0 ? 10 : prefixRef.value.clientWidth
  }
  if (props.border === 'full' || suffixRef.value.clientWidth) {
    paddingRight.value = suffixRef.value.clientWidth === 0 ? 10 : suffixRef.value.clientWidth
  }
  setTimeout(() => {
    if (props.border === 'full' || prefixRef.value.clientWidth) {
      paddingLeft.value = prefixRef.value.clientWidth === 0 ? 10 : prefixRef.value.clientWidth
    }
    if (props.border === 'full' || suffixRef.value.clientWidth) {
      paddingRight.value = suffixRef.value.clientWidth === 0 ? 10 : suffixRef.value.clientWidth
    }
  }, 1000)
})

const modelValue = defineModel<string | number>()
const errors = defineModel<string[]>('errors')

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const onValueChanged = (e: { target: { rawValue: number } }) => {
  emit('update:modelValue', Number(e.target.rawValue))
  if (errors.value?.length) errors.value = []
}

const inputValue = computed({
  set: () => {},
  get: () =>
    new Intl.NumberFormat('en-US', {
      maximumFractionDigits: props.decimalLength
    }).format(modelValue.value as number)
})

defineExpose({
  inputRef
})
</script>

<template>
  <component
    :is="BaseForm"
    :label="props.label"
    :layout="props.layout"
    :description="props.description"
    :required="props.required"
    :helpers="props.helpers"
    :errors="errors"
  >
    <input
      ref="inputRef"
      class="form-input"
      :class="{
        'text-right': align === 'right',
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none': border === 'none'
      }"
      v-model="inputValue"
      :placeholder="props.placeholder"
      :autofocus="props.autofocus"
      :required="props.required"
      :disabled="props.disabled"
      @click="selectAllText"
      :style="{
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`
      }"
    />
    <div
      ref="suffixRef"
      class="absolute right-0 h-full flex items-center justify-center text-slate-400 dark:text-slate-300"
    >
      <slot name="suffix"></slot>
    </div>
    <div
      ref="prefixRef"
      class="absolute h-full flex items-center justify-center text-slate-400 dark:text-slate-300"
    >
      <slot name="prefix"></slot>
    </div>
  </component>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
