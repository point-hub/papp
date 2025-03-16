Hover the Avatar to activate slide animation.

::: raw

<ClientOnly>
  <AvatarAnimate />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseAvatarGroup" />
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" animate />
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" animate />
      <component :is="BaseAvatar" src="https://placehold.co/150" name="John Doe" animate />
      <component
        :is="BaseAvatar"
        src="https://placehold.co/150"
        name="John Doe"
        animate
        colorIndicator="danger"
      />
    </component>
  </div>
</template>
```

:::
