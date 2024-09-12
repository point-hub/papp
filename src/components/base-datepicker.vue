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

const errors = ref(props.errors)

const value = computed({
  set: (text: string) => {
    if (!props.disabled) {
      errors.value = []
      // split string into array of [date][month][year]
      const date = text.split('-')

      if (!props.required && !text) {
        return
      }

      if (!text) {
        errors.value = ['Invalid date format']
        return
      }

      if (date.length !== 3 || Number(date[2]) < 1000) {
        errors.value = ['Invalid date format']
        nativeDate.value = ''
        emit('update:modelValue', '')
        return
      }

      const formattedDate = new Date()
      formattedDate.setDate(Number(date[0]))
      formattedDate.setMonth(Number(date[1]))
      formattedDate.setFullYear(Number(date[2]))
      nativeDate.value = `${date[2]}-${date[1]}-${date[0]}`
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

watch(
  value,
  (newValue) => {
    // split string into array of [date][month][year]
    const date = newValue.split('-')

    if (!props.required && !newValue) {
      return
    }

    if (!newValue) {
      errors.value = ['Invalid date format']
      return
    }

    if (date.length !== 3 || Number(date[2]) < 1000) {
      errors.value = ['Invalid date format']
      nativeDate.value = ''
      emit('update:modelValue', '')
      return
    }

    const formattedDate = new Date()
    formattedDate.setDate(Number(date[0]))
    formattedDate.setMonth(Number(date[1]))
    formattedDate.setFullYear(Number(date[2]))
    nativeDate.value = `${date[2]}-${date[1]}-${date[0]}`
  },
  { immediate: true, deep: true }
)

watch(nativeDate, (newValue) => {
  if (newValue) {
    value.value = formatDate(new Date(newValue), 'dd-MM-yyyy')
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
  <component
    :is="BaseForm"
    :label="props.label"
    :layout="props.layout"
    :description="props.description"
    :required="props.required"
    :helpers="props.helpers"
    :errors="errors"
  >
    <input
      ref="dateRef"
      v-model="nativeDate"
      type="date"
      class="form-input absolute! -z-50 text-transparent bg-transparent"
      :class="{
        'pl-0!': border === 'simple' || border === 'none'
      }"
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
        'border-none pl-0!': border === 'none'
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
