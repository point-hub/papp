::: raw

<TooltipComponent />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseTooltip } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseTooltip" content="Hello World">
    <button class="btn btn-primary btn-md">Tootlip!</button>
  </component>
  <component :is="BaseTooltip">
    <button class="btn btn-primary btn-md">Tootlip!</button>
    <template #content>
      <h2>Hello World</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reiciendis minus itaque
        incidunt architecto aliquid! Esse culpa animi vero quidem cumque laboriosam quis, blanditiis
        obcaecati fugiat, excepturi iure, necessitatibus voluptate!
      </p>
    </template>
  </component>
</template>
```

:::
