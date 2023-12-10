The Avatar component creates an image within its shape.

::: raw

<ClientOnly>
  <AvatarShape />
</ClientOnly>

:::

::: details Code

```vue {10,16,22}
<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <div>
    <component
      :is="BaseAvatar"
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
    />
    <component
      :is="BaseAvatar"
      src="https://via.placeholder.com/150"
      shape="square"
      name="John Doe"
    />
    <component
      :is="BaseAvatar"
      src="https://via.placeholder.com/150"
      shape="squircle"
      name="John Doe"
    />
  </div>
</template>
```

:::
