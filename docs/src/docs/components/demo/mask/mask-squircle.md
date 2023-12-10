The mask can crop the shape of squircle.

::: raw

<MaskSquircle />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseMask } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseMask" shape="squircle" src="https://via.placeholder.com/150" />
</template>
```

:::
