::: raw

<ClientOnly>
  <InputExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInput } from '@point-hub/papp'

const form = ref({
  name: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseInput" v-model="form.name" />
  </form>
</template>
```

:::
