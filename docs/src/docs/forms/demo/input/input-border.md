::: raw

<ClientOnly>
  <InputBorder />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInput } from '@point-hub/papp'

const form = ref({
  name1: '',
  name2: '',
  name3: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseInput" v-model="form.name1" label="Without Border" border="none" />
    <component :is="BaseInput" v-model="form.name2" label="Simple Border" border="simple" />
    <component :is="BaseInput" v-model="form.name3" label="Full Border" border="full" />
  </form>
</template>
```

:::
