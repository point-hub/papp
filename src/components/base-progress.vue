<script setup lang="ts">
import { computed } from 'vue'

export type BaseProgressColorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export type BaseProgressSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface Props {
  modelValue: number
  color?: BaseProgressColorType
  size?: BaseProgressSizeType
  isIndeterminate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'md',
  isIndeterminate: false
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
  <div
    class="progress-container"
    :class="{
      'progress-xs': props.size === 'xs',
      'progress-sm': props.size === 'sm',
      'progress-md': props.size === 'md',
      'progress-lg': props.size === 'lg',
      'progress-xl': props.size === 'xl',
      'progress-2xl': props.size === '2xl'
    }"
  >
    <div
      class="progress-bar"
      :class="{
        'progress-primary': props.color === 'primary',
        'progress-secondary': props.color === 'secondary',
        'progress-info': props.color === 'info',
        'progress-success': props.color === 'success',
        'progress-warning': props.color === 'warning',
        'progress-danger': props.color === 'danger',
        'is-indeterminate': props.isIndeterminate
      }"
      :style="{
        width: value + '%'
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>
