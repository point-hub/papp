::: raw

<InputNumberExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputNumber } from '@point-hub/papp'

const form = ref({
  number: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseInputNumber" v-model="form.number" />
  </form>
</template>
```

:::
