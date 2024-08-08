<script setup lang="ts">
import Cleave from 'cleave.js'
import { computed, onMounted, ref } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseInputNumberBorderType = 'none' | 'simple' | 'full'

export interface Props {
  modelValue: number | null
  id?: string
  label?: string
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
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  disabled: false
})

const inputRef = ref()
const cleave = ref()

onMounted(() => {
  cleave.value = new Cleave(inputRef.value, {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    numeralDecimalScale: props.decimalLength
  })
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

const value = computed({
  set: () => {
    emit('update:modelValue', Number(cleave.value.getRawValue()))
  },
  get: () => props.modelValue
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
        'border-simple px-0!': border === 'simple',
        'border-full': border === 'full',
        'border-none px-0!': border === 'none'
      }"
      v-model="value"
      :placeholder="props.placeholder"
      :autofocus="props.autofocus"
      :required="props.required"
      :disabled="props.disabled"
    />
  </component>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
