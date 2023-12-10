Buttons have their own style when disabled.

::: raw

<ClientOnly>
  <ButtonDisabled />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" disabled color="primary">Disabled</component>
    <component :is="BaseButton" disabled color="secondary">Disabled</component>
    <component :is="BaseButton" disabled color="info">Disabled</component>
    <component :is="BaseButton" disabled color="success">Disabled</component>
    <component :is="BaseButton" disabled color="warning">Disabled</component>
    <component :is="BaseButton" disabled color="danger">Disabled</component>
  </div>
</template>
```

:::
