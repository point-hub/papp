Using slot to render custom style

::: raw

<ClientOnly>
  <AlertSlot />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-alert color="danger">
    <template #title>
      <div class="flex items-center gap-2">
        <base-icon icon="i-far-triangle-exclamation" class="text-2xl" />
        <span class="text-2xl font-extrabold">Alert</span>
      </div>
    </template>
    <template #default>This is alert message</template>
  </base-alert>
</template>
```

:::
