::: raw

<InputNumberLabel />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputNumber } from '@point-hub/papp'

const form = ref({
  number1: '',
  number2: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseInputNumber"
      v-model="form.number1"
      label="Horizontal Label"
      layout="horizontal"
      description="description example"
    />
    <component
      :is="BaseInputNumber"
      v-model="form.number2"
      label="Vertical Label"
      layout="vertical"
      description="description example"
    />
  </form>
</template>
```

:::
