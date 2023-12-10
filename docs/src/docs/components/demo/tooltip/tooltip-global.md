::: raw

<ClientOnly>
  <TooltipGlobal />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-tooltip content="Hello World">
    <button class="btn btn-primary btn-md">Tootlip!</button>
  </base-tooltip>
  <base-tooltip>
    <button class="btn btn-primary btn-md">Tootlip!</button>
    <template #content>
      <h2>Hello World</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reiciendis minus itaque
        incidunt architecto aliquid! Esse culpa animi vero quidem cumque laboriosam quis, blanditiis
        obcaecati fugiat, excepturi iure, necessitatibus voluptate!
      </p>
    </template>
  </base-tooltip>
</template>
```

:::
