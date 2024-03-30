`Fill` Buttons can be filled.

::: raw

<ClientOnly>
  <ButtonColor />
</ClientOnly>

:::

`Outlined` Buttons can be outlined.

::: raw

<ButtonColorOutline />

:::

`light` Buttons can have a soft colors.

::: raw

<ButtonColorLight />

:::

`text` Buttons can be flat.

::: raw

<ButtonColorText />

:::

::: details Code

::: code-group

```vue [Filled]
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" color="primary">Primary</component>
    <component :is="BaseButton" color="secondary">Secondary</component>
    <component :is="BaseButton" color="info">Info</component>
    <component :is="BaseButton" color="success">Success</component>
    <component :is="BaseButton" color="warning">Warning</component>
    <component :is="BaseButton" color="danger">Danger</component>
  </div>
</template>
```

```vue [Outlined]
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" variant="outlined" color="primary">Primary</component>
    <component :is="BaseButton" variant="outlined" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="outlined" color="info">Info</component>
    <component :is="BaseButton" variant="outlined" color="success">Success</component>
    <component :is="BaseButton" variant="outlined" color="warning">Warning</component>
    <component :is="BaseButton" variant="outlined" color="danger">Danger</component>
  </div>
</template>
```

```vue [Light]
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" variant="light" color="primary">Primary</component>
    <component :is="BaseButton" variant="light" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="light" color="info">Info</component>
    <component :is="BaseButton" variant="light" color="success">Success</component>
    <component :is="BaseButton" variant="light" color="warning">Warning</component>
    <component :is="BaseButton" variant="light" color="danger">Danger</component>
  </div>
</template>
```

```vue [Text]
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" variant="text" color="primary">Primary</component>
    <component :is="BaseButton" variant="text" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="text" color="info">Info</component>
    <component :is="BaseButton" variant="text" color="success">Success</component>
    <component :is="BaseButton" variant="text" color="warning">Warning</component>
    <component :is="BaseButton" variant="text" color="danger">Danger</component>
  </div>
</template>
```

:::
