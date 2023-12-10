A Spinner component has various size.

::: raw

<SpinnerSize />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseSpinner } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseSpinner" size="xs">Button xs</component>
    <component :is="BaseSpinner" size="sm">Button sm</component>
    <component :is="BaseSpinner" size="md">Button md</component>
    <component :is="BaseSpinner" size="lg">Button lg</component>
    <component :is="BaseSpinner" size="xl">Button xl</component>
  </div>
</template>
```

:::
