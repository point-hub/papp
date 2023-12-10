::: raw

<ClientOnly>
  <DividerHorizontal />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseDivider } from '@point-hub/papp'
</script>

<template>
  <div class="flex">
    Left Content
    <component :is="BaseDivider" orientation="horizontal" />
    Middle Content
    <component :is="BaseDivider" orientation="horizontal" />
    Right Content
  </div>
</template>
```

:::
