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
<template>
  <div>
    <base-button color="primary">Primary</base-button>
    <base-button color="secondary">Secondary</base-button>
    <base-button color="info">Info</base-button>
    <base-button color="success">Success</base-button>
    <base-button color="warning">Warning</base-button>
    <base-button color="danger">Danger</base-button>
  </div>
</template>
```

```vue [Outlined]
<template>
  <div>
    <base-button variant="outlined" color="primary">Primary</base-button>
    <base-button variant="outlined" color="secondary">Secondary</base-button>
    <base-button variant="outlined" color="info">Info</base-button>
    <base-button variant="outlined" color="success">Success</base-button>
    <base-button variant="outlined" color="warning">Warning</base-button>
    <base-button variant="outlined" color="danger">Danger</base-button>
  </div>
</template>
```

```vue [Light]
<template>
  <div>
    <base-button variant="light" color="primary">Primary</base-button>
    <base-button variant="light" color="secondary">Secondary</base-button>
    <base-button variant="light" color="info">Info</base-button>
    <base-button variant="light" color="success">Success</base-button>
    <base-button variant="light" color="warning">Warning</base-button>
    <base-button variant="light" color="danger">Danger</base-button>
  </div>
</template>
```

```vue [Text]
<template>
  <div>
    <base-button variant="text" color="primary">Primary</base-button>
    <base-button variant="text" color="secondary">Secondary</base-button>
    <base-button variant="text" color="info">Info</base-button>
    <base-button variant="text" color="success">Success</base-button>
    <base-button variant="text" color="warning">Warning</base-button>
    <base-button variant="text" color="danger">Danger</base-button>
  </div>
</template>
```

:::
