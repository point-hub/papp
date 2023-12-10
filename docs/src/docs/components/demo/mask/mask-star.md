The mask can crop the shape of star.

::: raw

<ClientOnly>
  <MaskStar />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="star" src="https://via.placeholder.com/150" />
  <component :is="BaseMask" shape="star-2" src="https://via.placeholder.com/150" />
</template>
```

:::
