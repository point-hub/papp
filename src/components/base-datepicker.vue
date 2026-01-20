<script setup lang="ts">
import { formatDate, formatISO } from 'date-fns'
import { computed, onMounted, ref, watch } from 'vue'

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
  size?: string
  rounded?: boolean
  helpers?: string[]
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  layout: 'horizontal',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false,
  rounded: false
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

onMounted(() => {
  if (props.autofocus) inputRef.value?.focus()
})

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
      }" tabindex="-1" aria-hidden="true" />

    <input ref="inputRef" v-model.lazy="value"
      v-input-mask="{ date: true, delimiter: '-', datePattern: ['Y', 'm', 'd'] }" type="text"
      class="form-input pl-8! bg-inherit" :class="{
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none': border === 'none',
        'input-lg': size === 'lg',
        'rounded': rounded
      }" placeholder="YYYY-MM-DD" :autofocus="props.autofocus" :required="props.required" :readonly="props.readonly"
      :disabled="props.disabled" :data-testid="props.dataTestid" />

    <base-button variant="text" type="button"
      class="absolute h-full flex px-1 items-center justify-center text-slate-400 dark:text-slate-300"
      @click="onClickDateRef()">
      <base-icon icon="i-fa7-regular:calendar" />
    </base-button>
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
