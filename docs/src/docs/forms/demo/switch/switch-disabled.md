::: raw

<ClientOnly>
  <SwitchDisabled />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checked1: true,
  checked2: false
})
</script>

<template>
  <form @submit.prevent="">
    <base-switch v-model="form.checked1" disabled />
    <base-switch v-model="form.checked2" disabled />
  </form>
</template>
```

:::
