<script setup lang="ts">
import { computed } from 'vue'
import BaseForm from './base-form.vue'

export interface Props {
  modelValue: string
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: 'simple' | 'full' | 'none'
  layout?: 'vertical' | 'horizontal'
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
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  set: (text: string) => {
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
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none': border === 'none',
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
