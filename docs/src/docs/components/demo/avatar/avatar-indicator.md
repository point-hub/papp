Avatars can be a dot attached to it. It can be used to indicate the user status.

::: raw

<ClientOnly>
  <AvatarIndicator />
</ClientOnly>

:::

::: details Code

```vue:line-numbers {10,11,17,18,24,25,31,32,38,39,45,46}
<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <component
    :is="BaseAvatar"
    src="https://placehold.co/150"
    name="John Doe"
    indicator
    colorIndicator="primary"
  />
  <component
    :is="BaseAvatar"
    src="https://placehold.co/150"
    name="John Doe"
    indicator
    colorIndicator="secondary"
  />
  <component
    :is="BaseAvatar"
    src="https://placehold.co/150"
    name="John Doe"
    indicator
    colorIndicator="info"
  />
  <component
    :is="BaseAvatar"
    src="https://placehold.co/150"
    name="John Doe"
    indicator
    colorIndicator="success"
  />
  <component
    :is="BaseAvatar"
    src="https://placehold.co/150"
    name="John Doe"
    indicator
    colorIndicator="warning"
  />
  <component
    :is="BaseAvatar"
    src="https://placehold.co/150"
    name="John Doe"
    indicator
    colorIndicator="danger"
  />
</template>
```

:::
