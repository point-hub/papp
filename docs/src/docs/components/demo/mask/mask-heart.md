The mask can crop the shape of heart.

::: raw

<ClientOnly>
  <MaskHeart />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="heart" src="https://placehold.co/150" />
</template>
```

:::
