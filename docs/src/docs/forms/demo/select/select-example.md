::: raw

<ClientOnly>
  <SelectExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]
const form = ref({
  selected: null
})
</script>

<template>
  <form @submit.prevent="">
    <base-select v-model="form.selected" :options="options" />
  </form>
</template>
```

:::
