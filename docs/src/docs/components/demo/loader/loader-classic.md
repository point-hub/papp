Modify default background or text color

::: raw

<ClientOnly>
  <LoaderClassic />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <Demo class="grid cols-2">
    <base-card class="relative">
      <base-loader type="classic" sample="1">Loading...</base-loader>
    </base-card>
    <base-card class="relative">
      <base-loader type="classic" sample="2">Loading...</base-loader>
    </base-card>
    <base-card class="relative">
      <base-loader type="classic" sample="3">Loading...</base-loader>
    </base-card>
    <base-card class="relative">
      <base-loader type="classic" sample="4">Loading...</base-loader>
    </base-card>
  </Demo>
</template>
```

:::
