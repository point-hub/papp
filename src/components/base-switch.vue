<script setup lang="ts">
import { computed } from 'vue'
import BaseForm from './base-form.vue'

export interface Props {
  modelValue: string
  id?: string
  label?: string
  text?: string
  description?: string
  placeholder?: string
  textPosition?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  layout?: 'vertical' | 'horizontal'
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
  required: false,
  disabled: false,
  textPosition: 'left',
  size: 'md'
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
  <component
    :is="BaseForm"
    :label="props.label"
    :layout="props.layout"
    :description="props.description"
    :required="props.required"
    :helpers="props.helpers"
    :errors="props.errors"
  >
    <label>
      <span
        class="inline-flex cursor-pointer select-none items-center gap-2"
        :class="{ 'flex-row-reverse ': textPosition === 'right' }"
      >
        <slot name="label">{{ text }}</slot>
        <input
          v-model="value"
          class="switch"
          type="checkbox"
          :disabled="disabled"
          :class="[
            {
              'switch-sm': size === 'sm',
              'switch-md': size === 'md',
              'switch-lg': size === 'lg',
              'switch-xl': size === 'xl',
              'switch-disabled': disabled
            }
          ]"
        />
      </span>
    </label>
  </component>
</template>

<style lang="postcss">
.switch::before {
  @apply absolute transition-all duration-200 ease-in-out content-empty top-2px left-2px h-[calc(100%-2px*2)] w-[calc((100%/2)-(2px*2))];
}

.switch {
  @apply select-none focus-visible:ring checked:before:translate-x-[calc(100%+(2px*2))] before:bg-slate-50;
  @apply relative shrink-0 cursor-pointer select-none appearance-none overflow-hidden outline-none focus:outline-none h-5 w-10 rounded-full before:rounded-full;
  @apply bg-slate-300 checked:bg-primary;
  @apply dark:bg-slate-600 dark:checked:bg-info;
}

.switch-disabled {
  @apply checked:bg-primary/50 dark:checked:bg-info/50;
}

/* switch size */
.switch-sm {
  @apply h-4 w-8;
}
.switch-md {
  @apply h-5 w-10;
}
.switch-lg {
  @apply h-6 w-12;
}
.switch-xl {
  @apply h-7 w-14;
}
</style>
