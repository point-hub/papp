<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { type BaseFormLayoutType } from './base-form.vue'

export type BaseInputBorderType = 'none' | 'simple' | 'full'
export type BaseInputType = 'text' | 'tel' | 'email' | 'password' | 'date' | 'number'

export interface Props {
  modelValue: string
  id?: string
  type?: BaseInputType
  label?: string
  description?: string
  placeholder?: string
  border?: BaseInputBorderType
  layout?: BaseFormLayoutType
  maxlength?: number
  autofocus?: boolean
  required?: boolean
  readonly?: boolean
  disabled?: boolean
  size?: string
  rounded?: boolean
  paddingless?: boolean
  /**
   * Clearing or resetting errors when an update or change occurs.
   *
   * @default true
   */
  resetErrorsOnUpdate?: boolean
  /**
   * The helper text appears below the text input.
   */
  helpers?: string[]
  /**
   * Custom attribute to mark elements for testing
   */
  dataTestid?: string
}

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  type: 'text',
  layout: 'horizontal',
  autofocus: false,
  required: false,
  readonly: false,
  disabled: false,
  resetErrorsOnUpdate: true,
  rounded: false,
  paddingless: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  set: (text: string) => {
    emit('update:modelValue', text)
    /**
     * Reset errors value when props resetErrorsOnUpdate value is true and errors value is not empty
     */
    if (props.resetErrorsOnUpdate === true && errors.value?.length) {
      errors.value = []
    }
  },
  get: () => props.modelValue
})

/**
 * Bind reference to access and modify the DOM input element
 */
const inputRef = ref()

/**
 * Bind reference to access and modify the DOM prefix element
 */
const prefixRef = ref()

/**
 * Bind reference to access and modify the DOM suffix element
 */
const suffixRef = ref()

/**
 * Create space between the input text and a prefix element
 */
const paddingLeft = ref(0)

/**
 * Create space between the input text and a suffix element
 */
const paddingRight = ref(0)

/**
 * To show an error message below an input field
 */
const errors = defineModel<string[]>('errors')

/**
 * Execute code after the component has been mounted to the DOM
 */
onMounted(() => {
  if (props.autofocus) inputRef.value?.focus()

  fixPadding()

  /**
   * The consant value of setTimeout delay in milisecond
   */
  const DELAY = 1000
  /**
   * Sometime prefix and suffix element load icon from internet so we update the value again
   * After certain of time
   */
  setTimeout(() => {
    fixPadding()
  }, DELAY)
})

/**
 * Fix padding value from loaded prefix and suffix element
 */
const fixPadding = () => {
  paddingLeft.value = prefixRef.value?.clientWidth === 0 ? 16 : prefixRef.value?.clientWidth
  paddingRight.value = suffixRef.value?.clientWidth === 0 ? 16 : suffixRef.value?.clientWidth
}

/**
 * Expose from this component to its parent component
 */
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
    <input
      ref="inputRef"
      class="form-input"
      :class="{
        'border-simple': border === 'simple',
        'border-full': border === 'full',
        'border-none': border === 'none',
        'input-lg': size === 'lg',
        'rounded': rounded,
        'text-blue-600': !disabled && border === 'none',
        'px-0!': paddingless
      }"
      v-model.trim="value"
      :type="props.type"
      :maxlength="props.maxlength"
      :placeholder="props.placeholder"
      :autofocus="props.autofocus"
      :required="props.required"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :data-testid="props.dataTestid" :style="{
        paddingLeft: `${paddingLeft}px`,
        paddingRight: `${paddingRight}px`
      }" />
    <div ref="suffixRef"
      class="absolute flex px-2 items-center justify-center text-slate-400 dark:text-slate-300 right-0">
      <slot name="suffix"></slot>
    </div>
    <div ref="prefixRef" class="absolute flex px-2 items-center justify-center text-slate-400 dark:text-slate-300">
      <slot name="prefix"></slot>
    </div>
  </base-form>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>
