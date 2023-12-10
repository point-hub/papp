Badges can have a dot attached to it.

::: raw

<BadgeDot />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseBadge } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseBadge" withDot variant="fill">Filled</component>
    <component :is="BaseBadge" withDot variant="outline">Outlined</component>
    <component :is="BaseBadge" withDot variant="light">Light</component>
    <component :is="BaseBadge" withDot color="secondary" variant="fill">Filled</component>
    <component :is="BaseBadge" withDot color="secondary" variant="outline">Outlined</component>
    <component :is="BaseBadge" withDot color="secondary" variant="light">Light</component>
  </div>
  <div>
    <component :is="BaseBadge" withDot color="info" variant="fill">Filled</component>
    <component :is="BaseBadge" withDot color="info" variant="outline">Outlined</component>
    <component :is="BaseBadge" withDot color="info" variant="light">Light</component>
    <component :is="BaseBadge" withDot color="success" variant="fill">Filled</component>
    <component :is="BaseBadge" withDot color="success" variant="outline">Outlined</component>
    <component :is="BaseBadge" withDot color="success" variant="light">Light</component>
  </div>
  <div>
    <component :is="BaseBadge" withDot color="warning" variant="fill">Filled</component>
    <component :is="BaseBadge" withDot color="warning" variant="outline">Outlined</component>
    <component :is="BaseBadge" withDot color="warning" variant="light">Light</component>
    <component :is="BaseBadge" withDot color="danger" variant="fill">Filled</component>
    <component :is="BaseBadge" withDot color="danger" variant="outline">Outlined</component>
    <component :is="BaseBadge" withDot color="danger" variant="light">Light</component>
  </div>
</template>
```

:::
