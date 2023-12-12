::: raw

<ClientOnly>
  <FormExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { BaseForm, type BaseFormLayoutType } from '@point-hub/papp'

export interface Props {
  modelValue: string
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

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
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
    <input class="form-input border-simple" v-model="inputValue" />
  </component>
</template>
```

:::
