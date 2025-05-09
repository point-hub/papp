<script setup lang="ts">
import { computed, ref } from 'vue'

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
  autofocus?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | boolean | null): void
}>()

const value = computed({
  set: (text: string | number | boolean | null) => {
    emit('update:modelValue', text)
    if (errors.value?.length) errors.value = []
  },
  get: () => props.modelValue
})

const inputRef = ref()
const errors = defineModel<string[]>('errors')

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
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none px-0!': border === 'none'
      }"
      v-model.lazy="value"
      v-input-mask="options"
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
