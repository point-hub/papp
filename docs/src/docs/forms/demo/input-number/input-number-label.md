::: raw

<ClientOnly>
  <InputNumberLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputNumber } from '@point-hub/papp'

const form = ref({
  number1: null,
  number2: null
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseInputNumber"
      v-model="form.number1"
      label="Label"
      layout="horizontal"
      description="Horizontal Layout"
    />
    <component
      :is="BaseInputNumber"
      v-model="form.number2"
      label="Label"
      layout="vertical"
      description="Vertical Layout"
    />
  </form>
</template>
```

:::
