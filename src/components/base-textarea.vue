<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseTextareaBorderType = 'simple' | 'full' | 'none'

export interface Props {
  modelValue: string
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: BaseTextareaBorderType
  layout?: BaseFormLayoutType
  maxlength?: number
  autofocus?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  minHeight?: number
  maxHeight?: number
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  disabled: false
})

const errors = defineModel<string[]>('errors')

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  set: (text: string) => {
    emit('update:modelValue', text)
    if (errors.value?.length) errors.value = []
    resize()
  },
  get: () => props.modelValue
})

const height = ref(0)
const textareaRef = ref()

watch(value, () => {
  resize()
})

onMounted(() => {
  resize()
})

const resize = () => {
  height.value = 0
  nextTick(() => {
    height.value = textareaRef.value?.scrollHeight
  })
}

defineExpose({
  textareaRef
})
</script>

<template>
  <base-form
    :label="props.label"
    :layout="props.layout"
    :description="props.description"
    :required="props.required"
    :helpers="props.helpers"
    :errors="errors"
  >
    <textarea
      ref="textareaRef"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :required="required"
      :disabled="disabled"
      :maxlength="props.maxlength"
      class="form-input resize-none px-2"
      :class="{
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none px-0!': border === 'none',
        'overflow-hidden': !maxHeight
      }"
      :style="{
        height: height + 'px',
        minHeight: minHeight ? minHeight + 'px' : 'inherit',
        maxHeight: maxHeight ? maxHeight + 'px' : 'inherit'
      }"
      v-model="value"
      :data-testid="dataTestid"
    ></textarea>
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
