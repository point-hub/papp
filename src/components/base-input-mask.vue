<script setup lang="ts">
import { computed } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseInputMaskBorderType = 'simple' | 'full' | 'none'

export interface Props {
  modelValue: string | number | boolean | null
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: BaseInputMaskBorderType
  layout?: BaseFormLayoutType
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
  options?: any
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean | null): void
}>()

const value = computed({
  set: (text: string | number | boolean | null) => {
    emit('update:modelValue', text)
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
      class="form-input"
      :class="{
        'border-simple px-0!': border === 'simple',
        'border-full': border === 'full',
        'border-none px-0!': border === 'none',
        'input-disabled': disabled
      }"
      v-model.lazy="value"
      v-input-mask="options"
      :placeholder="props.placeholder"
      :required="props.required"
      :disabled="props.disabled"
    />
  </component>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
