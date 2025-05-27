The Avatar group renders its children as a stack.

::: raw

<ClientOnly>
  <AvatarGroup />
</ClientOnly>

:::

::: details Code

```vue:line-numbers {7,17}


<template>
  <div>
    <base-avatar-group>
      <base-avatar src="https://placehold.co/150" />
      <base-avatar src="https://placehold.co/150" />
      <base-avatar src="https://placehold.co/150" />
      <base-avatar src="https://placehold.co/150" />
    </base-avatar-group>
  </div>
</template>
```

:::
