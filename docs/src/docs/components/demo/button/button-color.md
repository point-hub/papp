`Fill` Buttons can be filled.

::: raw

<ButtonColor />

:::

`Outline` Buttons can be outlied.

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

```vue [Fill]
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

```vue [Outline]
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <div>
    <component :is="BaseButton" variant="outline" color="primary">Primary</component>
    <component :is="BaseButton" variant="outline" color="secondary">Secondary</component>
    <component :is="BaseButton" variant="outline" color="info">Info</component>
    <component :is="BaseButton" variant="outline" color="success">Success</component>
    <component :is="BaseButton" variant="outline" color="warning">Warning</component>
    <component :is="BaseButton" variant="outline" color="danger">Danger</component>
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
