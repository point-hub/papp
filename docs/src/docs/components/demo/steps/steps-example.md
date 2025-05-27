::: raw

<ClientOnly>
  <StepsExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    label: 'Step 1',
    active: true
  },
  {
    label: 'Step 2',
    active: false
  },
  {
    label: 'Step 3',
    active: false
  }
])
</script>

<template>
  <base-step v-model="items" show-label />
</template>
```

:::
