<script setup lang="ts">
import BaseIcon from './base-icon.vue'

export interface Props {
  id?: string
  label?: string
  description?: string
  placeholder?: string
  layout?: 'vertical' | 'horizontal'
  required?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
  required: false
})
</script>

<template>
  <div
    :class="{
      'lg:flex lg:items-start lg:gap-5': props.layout === 'horizontal'
    }"
  >
    <label
      :for="id"
      v-if="label"
      class="font-bold"
      :class="{
        'lg:flex lg:flex-col lg:w-25%': props.layout === 'horizontal',
        'text-sm': props.layout === 'vertical'
      }"
    >
      {{ label }}
      <span v-if="props.required" class="text-xs text-slate-400 italic">(required)</span>
      <span v-if="props.description" class="text-xs font-light text-slate-500">
        {{ props.description }}
      </span>
    </label>

    <div class="flex flex-1 flex-col">
      <div class="relative flex items-center">
        <slot></slot>
      </div>
      <div class="flex flex-col mt-1 gap-1" v-if="helpers">
        <slot name="helper">
          <div class="flex items-center gap-1" v-for="(helper, index) in helpers" :key="index">
            <p class="text-xs text-slate-500">
              {{ helper }}
            </p>
          </div>
        </slot>
      </div>
      <div class="flex flex-col mt-1 gap-1" v-if="errors">
        <slot name="error">
          <div class="flex items-center gap-1" v-for="(error, index) in errors" :key="index">
            <component :is="BaseIcon" icon="i-far-triangle-exclamation" class="text-danger" />
            <p class="text-xs text-danger">
              {{ error }}
            </p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
