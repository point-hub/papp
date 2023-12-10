Alerts can be dismissable.

::: raw

<ClientOnly>
  <AlertDismissable />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseAlert } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseAlert" isDismissable variant="light" color="info">
    This is alert message
  </component>
  <component :is="BaseAlert" isDismissable variant="light" color="success">
    This is alert message
  </component>
  <component :is="BaseAlert" isDismissable variant="light" color="danger">
    This is alert message
  </component>
</template>
```

:::
