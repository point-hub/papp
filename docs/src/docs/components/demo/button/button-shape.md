Buttons have various shape.

::: raw

<ButtonShape />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" shape="sharp">Sharp</component>
    <component :is="BaseButton" shape="round">Round</component>
    <component :is="BaseButton" shape="pill">Pill Button</component>
  </div>
</template>
```

:::
