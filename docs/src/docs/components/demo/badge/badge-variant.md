Badge can have `fill`, `outline` and `light` variant.

::: raw

<ClientOnly>
  <BadgeVariant />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseBadge } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseBadge" variant="filled">Filled</component>
    <component :is="BaseBadge" variant="outlined">Outlined</component>
    <component :is="BaseBadge" variant="light">Light</component>
  </div>
</template>
```

:::
