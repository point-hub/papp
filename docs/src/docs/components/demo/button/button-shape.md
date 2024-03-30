Buttons have various shape.

::: raw

<ClientOnly>
  <ButtonShape />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" color="primary" shape="sharp">Sharp</component>
    <component :is="BaseButton" color="primary" shape="rounded">Round</component>
    <component :is="BaseButton" color="primary" shape="pill">Pill Button</component>
  </div>
</template>
```

:::
