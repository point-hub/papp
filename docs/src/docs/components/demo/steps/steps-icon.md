::: raw

<StepsIcon />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseStep } from '@point-hub/papp'

const items = [
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
]
</script>

<template>
  <component :is="BaseStep" v-model="items" show-label></component>
</template>
```

:::
