# Quickstart

## Installation

Install the component using the preferred package manager

```sh
bun add @point-hub/papp
```

Update your main.ts

```ts
import '@point-hub/papp/style.css'
import { PluginInputMask, PluginTooltip } from '@point-hub/papp'

const app = createApp(App)

app.use(PluginInputMask)
app.use(PluginTooltip)
```

## Usage

In the `.vue` files

```vue
<script setup lang="ts">
import { BaseButton } from '@point-hub/papp'
</script>

<template>
  <component :is="BaseButton">Button</component>
</template>
```
