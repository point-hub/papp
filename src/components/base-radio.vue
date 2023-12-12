<script setup lang="ts">
import { computed } from 'vue'
import BaseForm, { type BaseFormLayoutType } from './base-form.vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'

export type BaseRadioOptionsLayout = 'vertical' | 'horizontal'

export interface Props {
  modelValue: Record<string, any> | null | undefined | string | number | boolean
  id?: string
  label?: string
  description?: string
  layout?: BaseFormLayoutType
  optionsLayout?: BaseRadioOptionsLayout
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
  options: Record<string, any>[]
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
  optionsLayout: 'horizontal',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  (
    e: 'update:modelValue',
    value: Record<string, any> | null | undefined | string | number | boolean
  ): void
}>()

const value = computed({
  set: (text: Record<string, any> | null | undefined | string | number | boolean) => {
    emit('update:modelValue', text)
  },
  get: () => props.modelValue ?? undefined
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
    <RadioGroup v-model="value">
      <div class="flex gap-2" :class="{ 'flex-col': props.optionsLayout === 'vertical' }">
        <RadioGroupOption
          as="div"
          v-for="option in options"
          :key="option.label"
          :disabled="disabled"
          :value="option"
          v-slot="{ active, checked }"
        >
          <slot :active="active" :checked="checked" :option="option">
            <div class="cursor-pointer">
              <div
                :class="[checked ? 'bg-primary text-white ' : 'bg-white text-slate-900']"
                class="border rounded p-2"
              >
                <div class="flex items-center justify-between gap-2">
                  <div v-if="checked" class="shrink-0 text-white">
                    <i class="i-fas-circle-check"></i>
                  </div>
                  <div v-else class="shrink-0">
                    <i class="i-far-circle"></i>
                  </div>
                  <div class="flex items-center">
                    <div class="text-sm">{{ option.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </component>
</template>
