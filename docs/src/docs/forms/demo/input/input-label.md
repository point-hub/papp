::: raw

<ClientOnly>
  <InputLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name1: '',
  name2: ''
})
</script>

<template>
  <form @submit.prevent="">
    <base-input
      v-model="form.name1"
      label="Label"
      layout="horizontal"
      description="Horizontal Layout"
    />
    <base-input
      v-model="form.name2"
      label="Label"
      layout="vertical"
      description="Vertical Layout"
    />
  </form>
</template>
```

:::
