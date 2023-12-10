Button can be blocked with `w-full`.

::: raw

<ButtonBlock />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" isBlock color="primary">Disabled</component>
    <component :is="BaseButton" isBlock color="secondary">Disabled</component>
    <component :is="BaseButton" isBlock color="info">Disabled</component>
    <component :is="BaseButton" isBlock color="success">Disabled</component>
    <component :is="BaseButton" isBlock color="warning">Disabled</component>
    <component :is="BaseButton" isBlock color="danger">Disabled</component>
  </div>
</template>
```

:::
