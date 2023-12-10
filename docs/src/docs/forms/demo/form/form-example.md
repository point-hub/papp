::: raw

<ClientOnly>
  <FormExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { BaseForm } from '@point-hub/papp'

export interface Props {
  modelValue: string
  id?: string
  label?: string
  description?: string
  placeholder?: string
  type?: 'text' | 'tel' | 'email' | 'password' | 'date' | 'number'
  border?: 'none' | 'simple' | 'full'
  layout?: 'vertical' | 'horizontal'
  required?: boolean
  disabled?: boolean
  helpers?: string[]
  errors?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
  type: 'text',
  required: false,
  disabled: false
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
    <input
      class="form-input border-simple"
      v-model.trim="value"
      :type="props.type"
      :placeholder="props.placeholder"
      :required="props.required"
      :disabled="props.disabled"
    />
  </component>
</template>
```

:::
