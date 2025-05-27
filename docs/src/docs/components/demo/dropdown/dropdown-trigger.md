Using `#trigger` slot to customize trigger button

::: raw

<ClientOnly>
  <DropdownTrigger />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <div>
    <base-dropdown>
      <template #trigger>
        <div class="bg-red-500 text-white rounded px-4 py-2">Custom Trigger</div>
      </template>
      <base-dropdown-item text="Option 1" />
      <base-dropdown-item text="Option 2" />
      <base-dropdown-item text="Option 3" />
      <base-dropdown-item text="Option 4" />
    </base-dropdown>
  </div>
</template>
```

:::
