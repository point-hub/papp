The mask can crop the shape of hexagon.

::: raw

<MaskHexagon />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="hexagon" src="https://via.placeholder.com/150" />
  <component :is="BaseMask" shape="hexagon-2" src="https://via.placeholder.com/150" />
</template>
```

:::
