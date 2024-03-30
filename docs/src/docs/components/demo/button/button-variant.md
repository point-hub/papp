Buttons can have `filled`, `outlined`, `light` and `text` variant.

::: raw

<ClientOnly>
  <ButtonVariant />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" color="primary" variant="filled">Filled</component>
    <component :is="BaseButton" color="primary" variant="outlined">Outlined</component>
    <component :is="BaseButton" color="primary" variant="light">Light</component>
    <component :is="BaseButton" color="primary" variant="text">Text</component>
  </div>
</template>
```

:::
