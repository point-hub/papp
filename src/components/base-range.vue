<script setup lang="ts">
import { computed } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export interface Props {
  modelValue: number
  id?: string
  label?: string
  description?: string
  layout?: BaseFormLayoutType
  disabled?: boolean
  showText?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
  disabled: false,
  showText: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const value = computed({
  set: (text: number) => {
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
    :helpers="props.helpers"
    :errors="props.errors"
  >
    <div class="flex w-full gap-2">
      <input type="range" class="w-full" min="0" max="100" v-model="value" :disabled="disabled" />
      <p v-if="showText">{{ value }}</p>
    </div>
  </component>
</template>
