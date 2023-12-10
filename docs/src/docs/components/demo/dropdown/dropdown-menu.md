Using `#default` slot to customize menu items

::: raw

<ClientOnly>
  <DropdownMenu />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseDropdown, BaseDropdownItem, BaseIcon } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseDropdownItem" v-slot="{ active }">
      <div :class="{ 'dropdown-item-active': active }" class="dropdown-item">
        <component :is="BaseIcon" icon="i-far-pen-to-square" />
        <span>Edit</span>
      </div>
    </component>
    <component :is="BaseDropdownItem" v-slot="{ active }">
      <div :class="{ 'dropdown-item-active': active }" class="dropdown-item">
        <component :is="BaseIcon" icon="i-far-copy" />
        <span>Duplicate</span>
      </div>
    </component>
  </div>
</template>
```

:::
