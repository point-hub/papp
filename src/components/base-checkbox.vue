<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref, watch } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseCheckboxThemeType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export interface Props {
  id?: string
  label?: string
  text?: string
  description?: string
  layout?: BaseFormLayoutType
  theme?: BaseCheckboxThemeType
  required?: boolean
  disabled?: boolean
  helpers?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'primary',
  layout: 'vertical',
  required: false,
  disabled: false
})

const modelValue = defineModel()
const trueValue = defineModel('true-value', { default: true })
const falseValue = defineModel('false-value', { default: false })

watch(
  () => modelValue.value,
  () => {
    if (errors.value?.length) errors.value = []
  },
  { deep: true }
)

const uuid = props.id ?? uuidv4()
const inputRef = ref()
const errors = defineModel<string[]>('errors')

defineExpose({
  inputRef
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
    <div class="flex gap-2 items-center">
      <input
        ref="inputRef"
        :id="uuid"
        v-model="modelValue"
        v-bind="$attrs"
        :value="trueValue"
        :required="required"
        :true-value="trueValue"
        :false-value="falseValue"
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
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/checkbox.css');
</style>
