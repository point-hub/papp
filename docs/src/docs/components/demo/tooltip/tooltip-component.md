::: raw

<ClientOnly>
  <TooltipComponent />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton, BaseTooltip } from '@point-hub/papp'
</script>

<template>
  <Demo is-row>
    <component :is="BaseTooltip" content="Hello World">
      <component :is="BaseButton">Tootlip!</component>
    </component>
    <component :is="BaseTooltip">
      <component :is="BaseButton">Tootlip!</component>
      <template #content>
        <h2>Hello World</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reiciendis minus itaque
          incidunt architecto aliquid! Esse culpa animi vero quidem cumque laboriosam quis,
          blanditiis obcaecati fugiat, excepturi iure, necessitatibus voluptate!
        </p>
      </template>
    </component>
  </Demo>
</template>
```

:::
