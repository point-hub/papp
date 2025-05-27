::: raw

<ClientOnly>
  <ChoosenExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
const options = ref([
  {
    _id: '1',
    label: 'Jane'
  },
  {
    _id: '2',
    label: 'John Doe'
  }
])

const selected = ref()
</script>

<template>
  <base-choosen title="Example" :options="options" v-model:selected="selected" />
</template>
```

:::
