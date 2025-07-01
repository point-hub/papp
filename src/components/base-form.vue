<script setup lang="ts">
export type BaseFormLayoutType = 'vertical' | 'horizontal'

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
  layout: 'vertical',
  required: false
})
</script>

<template>
  <div
    :class="{
      'relative lg:flex lg:items-start lg:gap-5': props.layout === 'horizontal'
    }"
  >
    <label
      :for="id"
      class="font-bold flex"
      :class="{
        'lg:flex-col lg:w-20% xl:w-17% 2xl:w-15% lg:items-start gap-1': props.layout === 'horizontal',
        'text-sm gap-1': props.layout === 'vertical'
      }"
    >
      <span v-if="props.label">{{ props.label }}</span>
      <span v-if="props.required" class="text-xs font-bold text-slate-400">(required)</span>
      <span v-if="props.description" class="text-xs font-medium text-slate-400">
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
            <base-icon icon="i-far-triangle-exclamation" class="text-danger" />
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
