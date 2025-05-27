::: raw

<ClientOnly>
  <SwitchText />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checked: false
})
</script>

<template>
  <form @submit.prevent="">
    <base-switch v-model="form.checked" text="Label" />
    <base-switch v-model="form.checked" text="Label" text-position="right" />
  </form>
</template>
```

:::
