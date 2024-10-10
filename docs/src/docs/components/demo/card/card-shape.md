The Card Component can have 2 kind of shape `rounded` or `sharp`

::: raw

<ClientOnly>
  <CardShape />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseCard" shape="rounded">
    <template #header>Rounded</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </component>

  <component :is="BaseCard">
    <template #header>Sharp</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </component>
</template>
```

:::
