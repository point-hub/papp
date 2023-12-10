::: raw

<InputNumberBorder />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputNumber } from '@point-hub/papp'

const form = ref({
  number1: '',
  number2: '',
  number3: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseInputNumber" v-model="form.number1" label="Without Border" border="none" />
    <component :is="BaseInputNumber" v-model="form.number2" label="Simple Border" border="simple" />
    <component :is="BaseInputNumber" v-model="form.number3" label="Full Border" border="full" />
  </form>
</template>
```

:::
