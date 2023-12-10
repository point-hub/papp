The mask can crop the shape of reuleaux triangle.

::: raw

<ClientOnly>
  <MaskReuleauxTriangle />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="reuleaux-triangle" src="https://via.placeholder.com/150" />
</template>
```

:::
