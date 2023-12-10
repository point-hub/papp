The height of the Textarea Autosize component automatically adjusts as a response to keyboard inputs and window resizing events.

::: raw

<TextareaExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextarea } from '@point-hub/papp'

const form = ref({
  text: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseTextarea" v-model="form.text" />
  </form>
</template>
```

:::
