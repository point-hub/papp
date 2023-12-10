::: raw

<TextareaLabel />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextarea } from '@point-hub/papp'

const form = ref({
  text1: '',
  text2: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseTextarea"
      label="Label"
      v-model="form.text1"
      layout="vertical"
      description="Vertical Layout"
    />
    <component
      :is="BaseTextarea"
      label="Label"
      v-model="form.text2"
      layout="horizontal"
      description="Horizontal Layout"
    />
  </form>
</template>
```

:::
