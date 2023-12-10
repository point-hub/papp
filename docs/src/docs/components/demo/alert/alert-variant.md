Alert can have `fill`, `outline` and `light` variant.

::: raw

<ClientOnly>
  <AlertVariant />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseAlert" variant="fill">Fill</component>
    <component :is="BaseAlert" variant="outline">Outline</component>
    <component :is="BaseAlert" variant="light">Light</component>
  </div>
</template>
```

:::
