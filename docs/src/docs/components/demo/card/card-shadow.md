Add or remove shadow using `shadow` property

::: raw

<ClientOnly>
  <CardShadow />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-card :shadow="true">
    <template #header>With Shadow</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>

  <base-card>
    <template #header>Without Shadow</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>
</template>
```

:::
