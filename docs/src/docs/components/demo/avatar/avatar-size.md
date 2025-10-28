The Avatar component can have various size.

::: raw

<ClientOnly>
  <AvatarSize />
</ClientOnly>

:::

::: details Code

```vue:line-numbers {13,21,29,37,45,53}


<template>
  <div>
    <base-avatar indicator src="https://placehold.co/150" shape="circle" name="John Doe" :size="128" />
    <base-avatar indicator src="https://placehold.co/150" shape="circle" name="John Doe" :size="96" />
    <base-avatar indicator src="https://placehold.co/150" shape="circle" name="John Doe" :size="64" />
    <base-avatar indicator src="https://placehold.co/150" shape="circle" name="John Doe" :size="48" />
    <base-avatar indicator src="https://placehold.co/150" shape="circle" name="John Doe" :size="32" />
  </div>
</template>
```

:::
