<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseTextareaBorderType = 'simple' | 'full' | 'none'

export interface Props {
  modelValue: string
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: BaseTextareaBorderType
  layout?: BaseFormLayoutType
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
  minHeight?: number
  maxHeight?: number
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
    resize()
  },
  get: () => props.modelValue
})

const height = ref(0)
const textareaRef = ref()

onMounted(() => {
  resize()
})

const resize = () => {
  height.value = 0
  nextTick(() => {
    height.value = textareaRef.value?.scrollHeight
  })
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
    <textarea
      ref="textareaRef"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="form-input resize-none px-2"
      :class="{
        'border-simple px-0!': border === 'simple',
        'border-full': border === 'full',
        'border-none px-0!': border === 'none',
        'input-disabled': disabled
      }"
      :style="{
        height: height + 'px',
        minHeight: minHeight ? minHeight + 'px' : 'inherit',
        maxHeight: maxHeight ? maxHeight + 'px' : 'inherit'
      }"
      v-model="value"
    ></textarea>
  </component>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
