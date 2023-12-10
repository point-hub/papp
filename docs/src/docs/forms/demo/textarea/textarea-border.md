::: raw

<ClientOnly>
  <TextareaBorder />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextarea } from '@point-hub/papp'

const form = ref({
  text1: '',
  text2: '',
  text3: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseTextarea"
      label="Without Border"
      v-model="form.text1"
      border="none"
    ></component>
    <component
      :is="BaseTextarea"
      label="Simple Border"
      v-model="form.text2"
      border="simple"
    ></component>
    <component
      :is="BaseTextarea"
      label="Full Border"
      v-model="form.text3"
      border="full"
    ></component>
  </form>
</template>
```

:::
