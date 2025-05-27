::: raw

<ClientOnly>
  <InputNumberExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  number: null
})
</script>

<template>
  <form @submit.prevent="">
    <base-input-number v-model="form.number" />
  </form>
</template>
```

:::
