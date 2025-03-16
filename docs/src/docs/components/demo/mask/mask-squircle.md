The mask can crop the shape of squircle.

::: raw

<ClientOnly>
  <MaskSquircle />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="squircle" src="https://placehold.co/150" />
</template>
```

:::
