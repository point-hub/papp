Avatars can be a dot attached to it. It can be used to indicate the user status.

::: raw

<ClientOnly>
  <AvatarIndicator />
</ClientOnly>

:::

::: details Code

```vue:line-numbers {10,11,17,18,24,25,31,32,38,39,45,46}


<template>
  <base-avatar src="https://placehold.co/150" name="John Doe" indicator colorIndicator="primary" />
  <base-avatar src="https://placehold.co/150" name="John Doe" indicator colorIndicator="secondary" />
  <base-avatar src="https://placehold.co/150" name="John Doe" indicator colorIndicator="info" />
  <base-avatar src="https://placehold.co/150" name="John Doe" indicator colorIndicator="success" />
  <base-avatar src="https://placehold.co/150" name="John Doe" indicator colorIndicator="warning" />
  <base-avatar src="https://placehold.co/150" name="John Doe" indicator colorIndicator="danger" />
</template>
```

:::
