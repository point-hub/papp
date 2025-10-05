Add or remove shadow using `shadow` property

::: raw

<ClientOnly>
  <CardShadow />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-card :title="'With Shadow'" shadow>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>

  <base-card :title="'Without Shadow'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>
</template>
```

:::
