<script setup lang="ts">
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
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
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

dayjs.extend(customParseFormat)

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
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
      emit('isoValue', dayjs(text, 'DD/MM/YYYY').toISOString())
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
    dateRef.value.showPicker()
  }
}
const nativeDate = ref()

watch(nativeDate, (newValue) => {
  value.value = dayjs(new Date(newValue)).format('DD-MM-YYYY')
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
      class="absolute right-0 top-1 px-4 py-2"
      @click="onClickDateRef()"
    >
      <base-icon icon="i-far-calendar" />
    </component>
    <input
      v-model.lazy="value"
      v-input-mask="{ date: true, delimiter: '-', datePattern: ['d', 'm', 'Y'] }"
      type="text"
      class="form-input bg-inherit"
      :class="{
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none': border === 'none',
        'input-disabled': disabled
      }"
      placeholder="DD-MM-YYYY"
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
