<script setup lang="ts">
import { ref } from 'vue'
import BaseIcon from './base-icon.vue'

const fileRef = ref()
const event = ref()

export interface Props {
  modelValue: string
  id?: string
  label?: string
  description?: string
  placeholder?: string
  border?: 'none' | 'simple' | 'full'
  layout?: 'vertical' | 'horizontal'
  multiple?: boolean
  required?: boolean
  disabled?: boolean
  helper?: string
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  border: 'full',
  layout: 'vertical',
  multiple: false,
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (e: 'change', event: any): void
}>()

const onUpload = (e: any) => {
  event.value = e
  emit('change', e)
}
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
        <slot :file-ref="fileRef">
          <input
            class="form-input"
            :class="{
              'border-simple': border === 'simple',
              'border-full': border === 'full',
              'border-none': border === 'none',
              'input-disabled': disabled
            }"
            @change="onUpload($event)"
            type="file"
            :multiple="multiple"
            :required="props.required"
            :disabled="props.disabled"
          />
        </slot>
        <input
          ref="fileRef"
          class="hidden"
          @change="onUpload($event)"
          type="file"
          :multiple="multiple"
          :required="props.required"
          :disabled="props.disabled"
        />
      </div>
      <slot name="helper" v-if="helper">
        <span class="text-sm text-slate-500">{{ helper }}</span>
      </slot>
      <slot name="error" v-if="error">
        <div class="flex items-center gap-1">
          <component :is="BaseIcon" icon="i-far-triangle-exclamation" class="text-danger" />
          <span class="text-sm text-danger">{{ error }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>
