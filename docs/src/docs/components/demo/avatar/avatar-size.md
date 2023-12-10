The Avatar component can have various size.

::: raw

<AvatarSize />

:::

::: details Code

```vue:line-numbers {13,21,29,37,45,53}
<script setup lang="ts">
import { BaseAvatar } from '@point-hub/papp'
</script>

<template>
  <div>
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="2xl"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="xl"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="lg"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="md"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="sm"
    />
    <component
      :is="BaseAvatar"
      indicator
      src="https://via.placeholder.com/150"
      shape="circle"
      name="John Doe"
      size="xs"
    />
  </div>
</template>
```

:::
