Badges can have an icon.

::: raw

<ClientOnly>
  <BadgeIcon />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseBadge, BaseIcon } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseBadge" variant="fill">
      Available Books <component :is="BaseIcon" icon="i-fad-books" />
    </component>
    <component :is="BaseBadge" variant="fill" color="success">
      <component :is="BaseIcon" icon="i-far-check" /> Success
    </component>
  </div>
</template>
```

:::
