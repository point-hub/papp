<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { computed } from 'vue'

import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseCheckboxThemeType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export interface Props {
  modelValue: boolean
  id?: string
  label?: string
  text?: string
  description?: string
  placeholder?: string
  layout?: BaseFormLayoutType
  theme?: BaseCheckboxThemeType
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  theme: 'primary',
  layout: 'vertical',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const value = computed({
  set: (text: boolean) => {
    emit('update:modelValue', text)
  },
  get: () => {
    return props.modelValue
  }
})

const uuid = props.id ?? uuidv4()
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
    <div class="flex gap-2 items-center">
      <input
        :id="uuid"
        v-model="value"
        :required="required"
        :disabled="disabled"
        :true-value="true"
        :false-value="false"
        class="form-checkbox"
        :class="{
          'checked:border-primary checked:bg-primary border-primary': props.theme === 'primary',
          'checked:border-secondary checked:bg-secondary border-secondary':
            props.theme === 'secondary',
          'checked:border-info checked:bg-info border-info': props.theme === 'info',
          'checked:border-success checked:bg-success border-success': props.theme === 'success',
          'checked:border-warning checked:bg-warning border-warning': props.theme === 'warning',
          'checked:border-danger checked:bg-danger border-danger': props.theme === 'danger',
          'bg-slate-500!': props.disabled
        }"
        type="checkbox"
      />
      <label :for="uuid" class="cursor-pointer">
        <p v-if="text">{{ text }}</p>
      </label>
    </div>
  </component>
</template>
