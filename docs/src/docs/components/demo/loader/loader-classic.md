Modify default background or text color

::: raw

<ClientOnly>
  <LoaderClassic />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseCard, BaseLoader } from '@point-hub/papp'
</script>

<template>
  <Demo class="grid cols-2">
    <component :is="BaseCard" class="relative">
      <component :is="BaseLoader" type="classic" sample="1">Loading...</component>
    </component>
    <component :is="BaseCard" class="relative">
      <component :is="BaseLoader" type="classic" sample="2">Loading...</component>
    </component>
    <component :is="BaseCard" class="relative">
      <component :is="BaseLoader" type="classic" sample="3">Loading...</component>
    </component>
    <component :is="BaseCard" class="relative">
      <component :is="BaseLoader" type="classic" sample="4">Loading...</component>
    </component>
  </Demo>
</template>
```

:::
