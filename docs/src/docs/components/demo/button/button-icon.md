Buttons can have an icon.

::: raw

<ClientOnly>
  <ButtonIcon />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseButton, BaseIcon } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton">
      <component :is="BaseIcon" icon="i-fad-books" />
    </component>
    <component :is="BaseButton" variant="outline" shape="pill">
      <component :is="BaseIcon" icon="i-fad-books" />
    </component>
    <component :is="BaseButton"><component :is="BaseIcon" icon="i-fad-books" /> Button</component>
    <component :is="BaseButton" variant="outline"
      >Button <component :is="BaseIcon" icon="i-fad-books"
    /></component>
  </div>
</template>
```

:::
