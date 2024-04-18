<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseInputType = 'text' | 'tel' | 'email' | 'password' | 'date' | 'number'
export type BaseInputBorderType = 'none' | 'simple' | 'full'

export interface Props {
  modelValue: string
  id?: string
  label?: string
  description?: string
  placeholder?: string
  type?: BaseInputType
  border?: BaseInputBorderType
  layout?: BaseFormLayoutType
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  type: 'text',
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

const prefixRef = ref()
const suffixRef = ref()
const paddingLeft = ref(0)
const paddingRight = ref(0)
onMounted(() => {
  if (props.border === 'full' || prefixRef.value.clientWidth) {
    paddingLeft.value = prefixRef.value.clientWidth === 0 ? 10 : prefixRef.value.clientWidth
  }
  if (props.border === 'full' || suffixRef.value.clientWidth) {
    paddingRight.value = suffixRef.value.clientWidth === 0 ? 10 : suffixRef.value.clientWidth
  }
  setTimeout(() => {
    if (props.border === 'full' || prefixRef.value.clientWidth) {
      paddingLeft.value = prefixRef.value.clientWidth === 0 ? 10 : prefixRef.value.clientWidth
    }
    if (props.border === 'full' || suffixRef.value.clientWidth) {
      paddingRight.value = suffixRef.value.clientWidth === 0 ? 10 : suffixRef.value.clientWidth
    }
  }, 1000)
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
      v-model.trim="value"
      :type="props.type"
      :placeholder="props.placeholder"
      :required="props.required"
      :disabled="props.disabled"
      :style="{
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`
      }"
    />
    <div
      ref="suffixRef"
      class="absolute right-0 h-full flex items-center justify-center text-slate-400 dark:text-slate-300"
    >
      <slot name="suffix"></slot>
    </div>
    <div
      ref="prefixRef"
      class="absolute h-full flex items-center justify-center text-slate-400 dark:text-slate-300"
    >
      <slot name="prefix"></slot>
    </div>
  </component>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
