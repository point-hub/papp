<script setup lang="ts">
import { formatDate, formatISO } from 'date-fns'
import { computed, ref, watch } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

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
  readonly?: boolean
  disabled?: boolean
  helpers?: string[]
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  border: 'simple',
  layout: 'vertical',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'isoValue', value: string): void
  (e: 'update:modelValue', value: string): void
}>()

const errors = defineModel<string[]>('errors')

const value = computed({
  set: (text: string) => {
    if (!props.disabled) {
      errors.value = []
      // split string into array of [date][month][year]
      const date = text?.split('-')

      if (!date || date.length !== 3 || Number(date[0]) < 1000) {
        if (props.required) {
          errors.value = ['Invalid date format.']
        }
        nativeDate.value = ''
        emit('update:modelValue', '')
        return
      }

      const formattedDate = new Date()
      formattedDate.setDate(Number(date[2]))
      formattedDate.setMonth(Number(date[1]))
      formattedDate.setFullYear(Number(date[0]))
      nativeDate.value = `${date[0]}-${date[1]}-${date[2]}`
      emit('isoValue', formatISO(formattedDate))
      emit('update:modelValue', text)
    }
  },
  get: () => {
    return props.modelValue
  }
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

watch(value, (newValue) => {
  // split string into array of [date][month][year]
  const date = newValue?.split('-')

  if (!date || date.length !== 3 || Number(date[0]) < 1000) {
    if (props.required) {
      errors.value = ['Invalid date format.']
    }
    nativeDate.value = ''
    emit('update:modelValue', '')
    return
  }

  const formattedDate = new Date()
  formattedDate.setDate(Number(date[2]))
  formattedDate.setMonth(Number(date[1]))
  formattedDate.setFullYear(Number(date[0]))
  nativeDate.value = `${date[0]}-${date[1]}-${date[2]}`
})

watch(nativeDate, (newValue) => {
  if (newValue) {
    value.value = formatDate(new Date(newValue), 'yyyy-MM-dd')
  } else {
    emit('update:modelValue', '')
  }
  dateRef.value.blur()
})

const inputRef = ref()
defineExpose({
  inputRef,
  dateRef
})
</script>

<template>
  <base-form :label="props.label" :layout="props.layout" :description="props.description" :required="props.required"
    :helpers="props.helpers" :errors="errors">
    <input ref="dateRef" v-model="nativeDate" type="date"
      class="form-input absolute! -z-50 text-transparent bg-transparent" :class="{
        'pl-0!': border === 'simple' || border === 'none'
      }" />
    <base-button variant="text" type="button" class="absolute left-0 px-0! py-2" :class="{
      'px-2!': border === 'full'
    }" @click="onClickDateRef()">
      <base-icon icon="i-fa7-regular:calendar" />
    </base-button>
    <input ref="inputRef" v-model.lazy="value"
      v-input-mask="{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }" type="text"
      class="form-input bg-inherit" :class="{
        'border-simple pl-6!': border === 'simple',
        'border-full pl-8!': border === 'full',
        'border-none pl-6!': border === 'none'
      }" placeholder="YYYY-MM-DD" :autofocus="props.autofocus" :required="props.required" :readonly="props.readonly"
      :disabled="props.disabled" :data-testid="props.dataTestid" />
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');

input[type='date']::-webkit-inner-spin-button,
input[type='date']::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

input[type='date']::-webkit-datetime-edit-day-field {
  color: transparent;
}

input[type='date']::-webkit-datetime-edit-day-field:focus {
  background: transparent;
}

input[type='date']::-webkit-datetime-edit-month-field {
  color: transparent;
}

input[type='date']::-webkit-datetime-edit-year-field {
  color: transparent;
}
</style>
