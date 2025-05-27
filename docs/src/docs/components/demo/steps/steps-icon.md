::: raw

<ClientOnly>
  <StepsIcon />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    label: 'Step 1',
    active: true,
    icon: 'i-far-user'
  },
  {
    label: 'Step 2',
    active: true,
    icon: 'i-far-map'
  },
  {
    label: 'Step 3',
    active: false,
    icon: 'i-far-file-lines'
  }
])
</script>

<template>
  <base-step v-model="items" show-label />
</template>
```

:::
