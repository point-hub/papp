The alert component has various color.

::: raw

<AlertColor />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseAlert" color="primary">Primary</component>
    <component :is="BaseAlert" color="secondary">Secondary</component>
    <component :is="BaseAlert" color="info">Info</component>
    <component :is="BaseAlert" color="success">Success</component>
    <component :is="BaseAlert" color="warning">Warning</component>
    <component :is="BaseAlert" color="danger">Danger</component>
  </div>
</template>
```

:::
