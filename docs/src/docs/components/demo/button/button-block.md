Button can be blocked with `w-full`.

::: raw

<ClientOnly>
  <ButtonBlock />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <div>
    <base-button is-block color="primary">Disabled</base-button>
    <base-button is-block color="secondary">Disabled</base-button>
    <base-button is-block color="info">Disabled</base-button>
    <base-button is-block color="success">Disabled</base-button>
    <base-button is-block color="warning">Disabled</base-button>
    <base-button is-block color="danger">Disabled</base-button>
  </div>
</template>
```

:::
