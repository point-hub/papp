The mask can crop the shape of hexagon.

::: raw

<ClientOnly>
  <MaskHexagon />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="hexagon" src="https://placehold.co/150" />
  <component :is="BaseMask" shape="hexagon-2" src="https://placehold.co/150" />
</template>
```

:::
