The Card Component can have 2 kind of shape `rounded` or `sharp`

::: raw

<ClientOnly>
  <CardShape />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-card shape="rounded">
    <template #header>Rounded</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>

  <base-card>
    <template #header>Sharp</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>
</template>
```

:::
