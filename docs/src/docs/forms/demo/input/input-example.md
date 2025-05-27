::: raw

<ClientOnly>
  <InputExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: ''
})
</script>

<template>
  <form @submit.prevent="">
    <base-input v-model="form.name" />
  </form>
</template>
```

:::
