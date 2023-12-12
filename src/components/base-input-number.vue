<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import BaseForm, { type BaseFormLayoutType } from './base-form.vue'
import Cleave from 'cleave.js'

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
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  decimalLength: 0,
  border: 'simple',
  layout: 'vertical',
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
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none': border === 'none',
        'input-disabled': disabled
      }"
      v-model="value"
      :placeholder="props.placeholder"
      :required="props.required"
      :disabled="props.disabled"
    />
  </component>
</template>
