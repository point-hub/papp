<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  modelValue: string
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  isIndeterminate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'md',
  isIndeterminate: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  set: (text: string) => {
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
