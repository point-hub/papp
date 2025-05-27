::: raw

<ClientOnly>
  <TextareaLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  text1: '',
  text2: ''
})
</script>

<template>
  <form @submit.prevent="">
    <base-textarea
      label="Label"
      v-model="form.text1"
      layout="vertical"
      description="Vertical Layout"
    />
    <base-textarea
      label="Label"
      v-model="form.text2"
      layout="horizontal"
      description="Horizontal Layout"
    />
  </form>
</template>
```

:::
