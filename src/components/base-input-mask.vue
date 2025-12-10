<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseInputMaskBorderType = 'simple' | 'full' | 'none'

export interface Props {
  modelValue: string | number | boolean | null
  id?: string
  name?: string
  label?: string
  description?: string
  placeholder?: string
  autofocus?: boolean
  border?: BaseInputMaskBorderType
  layout?: BaseFormLayoutType
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  size?: string
  rounded?: boolean
  helpers?: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any
  paddingless?: boolean
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  layout: 'horizontal',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false,
  rounded: false,
  paddingless: false
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

onMounted(() => {
  if (props.autofocus) inputRef.value?.focus()
})

defineExpose({
  inputRef
})
</script>

<template>
  <base-form :label="props.label" :layout="props.layout" :description="props.description" :required="props.required"
    :helpers="props.helpers" :errors="errors">
    <input ref="inputRef" class="form-input" :class="{
      'border-simple': border === 'simple',
      'border-full': border === 'full',
      'border-none': border === 'none',
      'input-lg': size === 'lg',
      'rounded': rounded,
      'px-0!': paddingless
    }" v-model.lazy="value" v-input-mask="options" :required="props.required" :readonly="props.readonly"
      :disabled="props.disabled" :autofocus="props.autofocus" :placeholder="props.placeholder"
      :data-testid="props.dataTestid" />
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
