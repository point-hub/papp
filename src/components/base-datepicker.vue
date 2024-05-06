<script setup lang="ts">
import { formatDate, formatISO } from 'date-fns'
import { computed, ref, watch } from 'vue'

import BaseButton from './base-button.vue'
import BaseForm, { type BaseFormLayoutType } from './base-form.vue'

export type BaseDatepickerBorderType = 'simple' | 'full' | 'none'

export interface Props {
  modelValue: string
  id?: string
  label?: string
  description?: string
  border?: BaseDatepickerBorderType
  layout?: BaseFormLayoutType
  autofocus?: boolean
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'isoValue', value: string): void
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  set: (text: string) => {
    if (!props.disabled) {
      const date = text.split('-')
      emit('isoValue', formatISO(new Date(`${date[2]}-${date[1]}-${date[0]}`)))
      emit('update:modelValue', text)
    }
  },
  get: () => props.modelValue
})

/**
 * HTMLInputElement.showPicker()
 *
 * This is the same picker that would normally be displayed when the element
 * is selected, but can be triggered from a button press or other user interaction.
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker
 */
const dateRef = ref()

const onClickDateRef = () => {
  if (!props.disabled) {
    dateRef.value.focus()
    dateRef.value.showPicker()
  }
}
const nativeDate = ref()

watch(nativeDate, (newValue) => {
  value.value = formatDate(new Date(newValue), 'dd-MM-yyyy')
  dateRef.value.blur()
})

const inputRef = ref()
defineExpose({
  inputRef,
  dateRef
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
      ref="dateRef"
      v-model="nativeDate"
      type="date"
      class="form-input absolute -z-50 text-transparent bg-transparent"
    />
    <component
      :is="BaseButton"
      variant="text"
      type="button"
      class="absolute right-0 px-4 py-2"
      @click="onClickDateRef()"
    >
      <base-icon icon="i-far-calendar" />
    </component>
    <input
      ref="inputRef"
      v-model.lazy="value"
      v-input-mask="{ date: true, delimiter: '-', datePattern: ['d', 'm', 'Y'] }"
      type="text"
      class="form-input bg-inherit"
      :class="{
        'border-simple pl-0!': border === 'simple',
        'border-full': border === 'full',
        'border-none pl-0!': border === 'none',
        'input-disabled': disabled
      }"
      placeholder="DD-MM-YYYY"
      :autofocus="props.autofocus"
      :required="props.required"
      :disabled="props.disabled"
    />
  </component>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
input[type='date']::-webkit-inner-spin-button,
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}
</style>
