Using `#default` slot to customize menu items

::: raw

<ClientOnly>
  <DropdownMenu />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-dropdown>
    <base-dropdown-item v-slot="{ active }">
      <div :class="{ 'dropdown-item-active': active }" class="dropdown-item">
        <base-icon icon="i-fa7-regular:pen-to-square" />
        <span>Edit</span>
      </div>
    </base-dropdown-item>
    <base-dropdown-item v-slot="{ active }">
      <div :class="{ 'dropdown-item-active': active }" class="dropdown-item">
        <base-icon icon="i-fa7-regular:copy" />
        <span>Duplicate</span>
      </div>
    </base-dropdown-item>
  </base-dropdown>
</template>
```

:::
