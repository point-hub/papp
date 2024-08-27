Badges can have an icon.

::: raw

<ClientOnly>
  <BadgeIcon />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseBadge } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseBadge" variant="filled">
    Available Books <base-icon icon="i-fad-books" />
  </component>
  <component :is="BaseBadge" variant="filled" color="success">
    <base-icon icon="i-far-check" /> Success
  </component>
</template>
```

:::
