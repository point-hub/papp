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
    <base-avatar
      indicator
      src="https://placehold.co/150"
      shape="circle"
      name="John Doe"
      size="2xl"
    />
    <base-avatar
      indicator
      src="https://placehold.co/150"
      shape="circle"
      name="John Doe"
      size="xl"
    />
    <base-avatar
      indicator
      src="https://placehold.co/150"
      shape="circle"
      name="John Doe"
      size="lg"
    />
    <base-avatar
      indicator
      src="https://placehold.co/150"
      shape="circle"
      name="John Doe"
      size="md"
    />
    <base-avatar
      indicator
      src="https://placehold.co/150"
      shape="circle"
      name="John Doe"
      size="sm"
    />
    <base-avatar
      indicator
      src="https://placehold.co/150"
      shape="circle"
      name="John Doe"
      size="xs"
    />
  </div>
</template>
```

:::
