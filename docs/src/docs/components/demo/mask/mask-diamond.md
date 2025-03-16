The mask can crop the shape of diamond.

::: raw

<ClientOnly>
  <MaskDiamond />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="diamond" src="https://placehold.co/150" />
</template>
```

:::
