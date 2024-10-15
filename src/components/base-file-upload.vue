<script setup lang="ts">
import { ref } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseFileUploadBorderType = 'none' | 'simple' | 'full'

export interface Props {
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: BaseFileUploadBorderType
  layout?: BaseFormLayoutType
  multiple?: boolean
  autofocus?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  layout: 'vertical',
  multiple: false,
  autofocus: false,
  required: false,
  disabled: false
})

const emit = defineEmits<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (e: 'change', event: any): void
}>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onUpload = (e: any) => {
  emit('change', e)
}

const fileRef = ref()
const inputRef = ref()
defineExpose({
  fileRef,
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
    <slot :file-ref="fileRef">
      <input
        ref="inputRef"
        class="form-input"
        :class="{
          'border-simple': border === 'simple',
          'border-full': border === 'full',
          'border-none': border === 'none'
        }"
        @change="onUpload($event)"
        type="file"
        :multiple="multiple"
        :autofocus="props.autofocus"
        :required="props.required"
        :disabled="props.disabled"
      />
    </slot>
    <input
      ref="fileRef"
      class="hidden"
      @change="onUpload($event)"
      type="file"
      :multiple="multiple"
      :required="props.required"
      :disabled="props.disabled"
    />
  </component>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
