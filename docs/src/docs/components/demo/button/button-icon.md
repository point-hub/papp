Buttons can have an icon.

::: raw

<ClientOnly>
  <ButtonIcon />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-button color="primary">
    <base-icon icon="i-fad-books" />
  </base-button>
  <base-button color="primary" variant="outlined" shape="pill">
    <base-icon icon="i-fad-books" />
  </base-button>
  <base-button color="primary"><base-icon icon="i-fad-books" /> Button</base-button>
  <base-button color="primary" variant="outlined">
    Button <base-icon icon="i-fad-books" />
  </base-button>
</template>
```

:::
