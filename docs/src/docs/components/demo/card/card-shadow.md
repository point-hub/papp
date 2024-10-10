Add or remove shadow using `shadow` property

::: raw

<ClientOnly>
  <CardShadow />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseCard" :shadow="true">
    <template #header>With Shadow</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </component>

  <component :is="BaseCard">
    <template #header>Without Shadow</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </component>
</template>
```

:::
