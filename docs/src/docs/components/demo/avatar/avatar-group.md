The Avatar group renders its children as a stack.

::: raw

<ClientOnly>
  <AvatarGroup />
</ClientOnly>

:::

::: details Code

```vue:line-numbers {7,17}
<script setup lang="ts">
import { BaseAvatar, BaseAvatarGroup } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseAvatarGroup" />
      <component :is="BaseAvatar" src="https://via.placeholder.com/150" name="John Doe" />
      <component :is="BaseAvatar" src="https://via.placeholder.com/150" name="John Doe" />
      <component :is="BaseAvatar" src="https://via.placeholder.com/150" name="John Doe" />
      <component
        :is="BaseAvatar"
        src="https://via.placeholder.com/150"
        name="John Doe"
        colorIndicator="danger"
      />
    </component>
  </div>
</template>
```

:::
