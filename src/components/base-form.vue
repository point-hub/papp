<script setup lang="ts">
import { computed, useSlots } from 'vue'

// Explicitly define all possible layout values for clarity
export type BaseFormLayoutType = 'vertical' | 'v' | 'horizontal' | 'h'

export interface Props {
  id?: string
  label?: string
  description?: string
  layout?: BaseFormLayoutType
  required?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'horizontal',
  required: false
})

const slots = useSlots()

/**
 * Resolves the layout prop into the full string ('horizontal' or 'vertical').
 * This centralizes the logic for handling shorthands ('h', 'v').
 */
const resolvedLayout = computed(() => {
  switch (props.layout) {
    case 'h':
    case 'horizontal':
      return 'horizontal'
    case 'v':
    case 'vertical':
    default:
      return 'vertical'
  }
})

// Centralized check for the layout style
const isHorizontal = computed(() => resolvedLayout.value === 'horizontal')
</script>

<template>
  <div :class="{ 'relative lg:flex lg:items-start lg:gap-5': isHorizontal && props.label }">
    <label :for="props.id" class="font-bold flex flex-col lg:flex-row" :class="{
      // Horizontal classes
      'lg:flex-col lg:gap-0 lg:w-20% xl:w-17% 2xl:w-15% lg:items-start gap-0': isHorizontal && props.label,
      // Vertical classes (default)
      'text-sm gap-0 lg:gap-1': !isHorizontal || !props.label,
    }">
      <div class="space-x-1">
        <span v-if="props.label">{{ props.label }}</span>
        <span v-if="props.required" class="text-xs font-bold text-slate-400">(required)</span>
      </div>
      <span v-if="props.description" class="text-xs font-medium text-slate-400">
        {{ props.description }}
      </span>
    </label>

    <div class="flex flex-1 flex-col">
      <div class="relative flex items-center">
        <slot></slot>
      </div>

      <div class="flex flex-col mt-1 gap-1" v-if="props.helpers || slots.helper">
        <slot name="helper">
          <div class="flex items-center gap-1" v-for="(helper, index) in props.helpers" :key="index">
            <p class="text-xs text-slate-500">
              {{ helper }}
            </p>
          </div>
        </slot>
      </div>

      <div class="flex flex-col mt-1 gap-1" v-if="props.errors || slots.error">
        <slot name="error">
          <div class="flex items-center gap-1" v-for="(error, index) in props.errors" :key="index">
            <base-icon icon="i-fa7-regular:triangle-exclamation" class="text-danger" />
            <p class="text-xs text-danger">
              {{ error }}
            </p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/input.css');
</style>