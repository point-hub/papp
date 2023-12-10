In the absence of a image, you can use the initial. Initials can be used in various variants.

::: raw

<AvatarInitial />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseAvatar" name="John" />
    <component :is="BaseAvatar" name="John Doe" />
    <component :is="BaseAvatar" name="John Doe Rock" />
  </div>
</template>
```

:::
