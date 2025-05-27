<script setup lang="ts">
import { computed } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export interface Props {
  modelValue: number
  id?: string
  label?: string
  description?: string
  layout?: BaseFormLayoutType
  disabled?: boolean
  showText?: boolean
  helpers?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
  disabled: false,
  showText: false
})

const errors = defineModel<string[]>('errors')

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const value = computed({
  set: (text: number) => {
    emit('update:modelValue', text)
    if (errors.value?.length) errors.value = []
  },
  get: () => props.modelValue
})
</script>

<template>
  <base-form
    :label="props.label"
    :layout="props.layout"
    :description="props.description"
    :helpers="props.helpers"
    :errors="errors"
  >
    <div class="flex w-full gap-2">
      <input type="range" class="w-full" min="0" max="100" v-model="value" :disabled="disabled" />
      <p v-if="showText">{{ value }}</p>
    </div>
  </base-form>
</template>
