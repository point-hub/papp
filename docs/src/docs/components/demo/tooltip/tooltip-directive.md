::: raw

<ClientOnly>
  <TooltipDirective />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <button class="btn btn-primary btn-md" v-tooltip="{ content: 'Hi!' }">Tootlip!</button>
  <button class="btn btn-primary btn-md" v-tooltip="'Hello!'">Tootlip!</button>
</template>
```

:::
