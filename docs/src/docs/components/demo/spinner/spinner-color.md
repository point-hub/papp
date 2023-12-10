A Spinner component has various color.

::: raw

<SpinnerColor />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseSpinner } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseSpinner" color="primary">Primary</component>
    <component :is="BaseSpinner" color="secondary">Secondary</component>
    <component :is="BaseSpinner" color="info">Info</component>
    <component :is="BaseSpinner" color="success">Success</component>
    <component :is="BaseSpinner" color="warning">Warning</component>
    <component :is="BaseSpinner" color="danger">Danger</component>
  </div>
</template>
```

:::
