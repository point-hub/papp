::: raw

<ClientOnly>
  <TooltipGlobal />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <Demo is-row>
    <base-tooltip content="Hello World">
      <base-button>Tootlip!</base-button>
    </base-tooltip>
    <base-tooltip>
      <base-button>Tootlip!</base-button>
      <template #content>
        <h2>Hello World</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reiciendis minus itaque
          incidunt architecto aliquid! Esse culpa animi vero quidem cumque laboriosam quis,
          blanditiis obcaecati fugiat, excepturi iure, necessitatibus voluptate!
        </p>
      </template>
    </base-tooltip>
  </Demo>
</template>
```

:::
