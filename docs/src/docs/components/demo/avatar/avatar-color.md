In the absence of a image, you can use the initial.

::: raw

<ClientOnly>
  <AvatarColor />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseAvatar" color="primary" name="John Doe" />
    <component :is="BaseAvatar" color="secondary" name="John Doe" />
    <component :is="BaseAvatar" color="info" name="John Doe" />
    <component :is="BaseAvatar" color="success" name="John Doe" />
    <component :is="BaseAvatar" color="warning" name="John Doe" />
    <component :is="BaseAvatar" color="danger" name="John Doe" />
  </div>
</template>
```

:::
