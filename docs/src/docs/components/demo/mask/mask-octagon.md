The mask can crop the shape of octagon.

::: raw

<ClientOnly>
  <MaskOctagon />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="octagon" src="https://via.placeholder.com/150" />
</template>
```

:::
