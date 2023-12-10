Button components can have various sizes.

::: raw

<ClientOnly>
  <ButtonSize />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" size="xs">Button xs</component>
    <component :is="BaseButton" size="sm">Button sm</component>
    <component :is="BaseButton" size="md">Button md</component>
    <component :is="BaseButton" size="lg">Button lg</component>
    <component :is="BaseButton" size="xl">Button xl</component>
  </div>
</template>
```

:::
