The Avatar component creates an image within its shape.

::: raw

<ClientOnly>
  <AvatarShape />
</ClientOnly>

:::

::: details Code

```vue {10,16,22}
<template>
  <div>
    <base-avatar src="https://placehold.co/150" shape="circle" name="John Doe" />
    <base-avatar src="https://placehold.co/150" shape="square" name="John Doe" />
    <base-avatar src="https://placehold.co/150" shape="squircle" name="John Doe" />
  </div>
</template>
```

:::
