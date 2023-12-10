The alert component can have a title

::: raw

<ClientOnly>
  <AlertTitle />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseAlert" color="danger" title="Alert">This is alert message</component>
</template>
```

:::
