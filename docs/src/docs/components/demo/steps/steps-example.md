::: raw

<ClientOnly>
  <StepsExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseStep } from '@point-hub/papp'

const items = [
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
]
</script>

<template>
  <component :is="BaseStep" v-model="items" show-label></component>
</template>
```

:::
