# Quickstart

## Installation

Install the component using the preferred package manager

```sh
bun add @point-hub/papp
```

Update your main.ts

```ts
import '@point-hub/papp/style.css'
import { PluginBaseComponents, PluginInputMask, PluginTooltip } from '@point-hub/papp'

const app = createApp(App)

app.use(PluginInputMask)
app.use(PluginTooltip)
// import all base component globally
app.use(PluginBaseComponents)
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

Or if you using global components, you can skip import each component locally

```vue
<base-button>Button</base-button>
```

## Starter Template

This template should help get you started developing with Vue 3 in Vite using Pointhub App Components as Base UI.

Github: https://github.com/point-hub/papp-starter
