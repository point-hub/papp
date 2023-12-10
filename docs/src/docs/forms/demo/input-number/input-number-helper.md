::: raw

<InputNumberHelper />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputNumber } from '@point-hub/papp'

const form = ref({
  number1: null,
  number2: null,
  number3: null,
  number4: null,
  number5: null,
  number6: 10000
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseInputNumber" v-model="form.number1" label="Label" required />
    <component
      :is="BaseInputNumber"
      v-model="form.number2"
      label="Label"
      placeholder="Placeholder example"
    />
    <component
      :is="BaseInputNumber"
      v-model="form.number3"
      label="Label"
      description="Description example"
    />
    <component
      :is="BaseInputNumber"
      v-model="form.number4"
      label="Label"
      :helpers="['Helper example']"
    />
    <component
      :is="BaseInputNumber"
      v-model="form.number5"
      label="Label"
      :errors="['Error example']"
    />
    <component :is="BaseInputNumber" v-model="form.number6" label="Label" disabled />
  </form>
</template>
```

:::
