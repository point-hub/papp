Buttons can have `fill`, `outline`, `light` and `text` variant.

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
    <component :is="BaseButton" variant="fill">Fill</component>
    <component :is="BaseButton" variant="outline">Outline</component>
    <component :is="BaseButton" variant="light">Light</component>
    <component :is="BaseButton" variant="text">Text</component>
  </div>
</template>
```

:::
