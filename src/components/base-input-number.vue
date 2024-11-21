<script setup lang="ts">
import { directive as vNumber } from '@coders-tm/vue-number-format'
import { computed, onMounted, ref } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseInputNumberBorderType = 'none' | 'simple' | 'full'

export interface Props {
  modelValue: number | null
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
  errors?: string[]
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

const inputRef = ref()
const options = {
  decimal: '.',
  separator: ',',
  precision: props.decimalLength
}

const selectAllText = () => {
  inputRef.value.select()
}

const prefixRef = ref()
const suffixRef = ref()
const paddingLeft = ref(0)
const paddingRight = ref(0)

onMounted(() => {
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

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const inputValue = computed({
  set: (value) => {
    if (!value) {
      value = 0
    }
    emit('update:modelValue', value)
  },
  get: () => {
    return props.modelValue
  }
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
    :errors="props.errors"
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
      v-number="options"
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
