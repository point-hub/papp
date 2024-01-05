::: raw

<ClientOnly>
  <TooltipDirective />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseButton" v-tooltip="{ content: 'Hi!' }">Tootlip!</component>
    <component :is="BaseButton" v-tooltip="'Hello!'">Tootlip!</component>
  </Demo>
</template>
```

:::
