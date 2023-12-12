<script setup lang="ts">
import { ref } from 'vue'
import BaseForm from './base-form.vue'

const fileRef = ref()

export interface Props {
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: 'none' | 'simple' | 'full'
  layout?: 'vertical' | 'horizontal'
  multiple?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  layout: 'vertical',
  multiple: false,
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'change', event: any): void
}>()

const onUpload = (e: any) => {
  emit('change', e)
}
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
        class="form-input"
        :class="{
          'border-simple': border === 'simple',
          'border-full': border === 'full',
          'border-none': border === 'none',
          'input-disabled': disabled
        }"
        @change="onUpload($event)"
        type="file"
        :multiple="multiple"
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
