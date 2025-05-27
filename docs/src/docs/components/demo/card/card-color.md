Modify default background or text color

::: raw

<ClientOnly>
  <CardColor />
</ClientOnly>

:::

::: details Code

```vue
<template>
  <base-card bg-color="#0000FF" title-color="white" body-color="white">
    <template #header>Blue</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>

  <base-card bg-color="red" title-color="white" body-color="white">
    <template #header>Red</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </base-card>
</template>
```

:::
