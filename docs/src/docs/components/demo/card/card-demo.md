::: raw

<CardDemo />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseCard } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseCard">
    <template #header>Card Title</template>
    <template #default>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis porro laudantium ea quisquam
      nulla recusandae quidem sit obcaecati incidunt expedita temporibus voluptatibus quas cumque
      doloribus, enim magni nobis dolorum libero.
    </template>
  </component>
</template>
```

:::
