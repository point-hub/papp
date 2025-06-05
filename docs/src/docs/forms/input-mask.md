---
outline: deep
---

<script setup lang="ts">
import InputMaskExample from './demo/input-mask/input-mask-example.vue'
import InputMaskHelper from './demo/input-mask/input-mask-helper.vue'
</script>

# Input Mask

To provide an easy way to increase input field readability by formatting your typed data.

## Examples

### Input Mask

<!--@include: ./demo/input-mask/input-mask-example.md-->

### Helper

<!--@include: ./demo/input-mask/input-mask-helper.md-->

## Input Mask API

### Types

```ts
export type BaseInputMaskBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = `horizontal` `vertical`
```

### Props

| Name           | Type                    | Default    | Description                       |
| -------------- | ----------------------- | ---------- | --------------------------------- |
| v-model        | string                  |            | v-model is `required`.            |
| v-model:errors | string[]                |            | Input error message.              |
| id             | string                  |            | Input id.                         |
| label          | string                  |            | Input label.                      |
| description    | string                  |            | Input description.                |
| placeholder    | string                  |            | Input placeholder.                |
| border         | BaseInputMaskBorderType | `simple`   | Input border.                     |
| layout         | BaseFormLayoutType      | `vertical` | Input layout.                     |
| autofocus      | boolean                 | false      | Focus input on page load.         |
| required       | boolean                 | false      | if true input mask is `required`. |
| disabled       | boolean                 | false      | if true input mask is `disabled`. |
| helpers        | string[]                |            | Input helper message.             |
| options        | object                  |            | Cleave options                    |
| data-testid    | string                  |            | Testing ID.                       |

## Automated Test Guide

If you pass a `data-testid` to the `<base-input-mask>` component, it will automatically generate unique `data-testid` attributes for testing.

### Gherkin Scenario

```feature
When I type "4242556677889900" into "credit-card"
```

### Step Definition

```ts
When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})
```

### Code Implementation

```vue
<script setup>
import { ref } from 'vue'

const creditCard = ref()
</script>

<template>
  <base-input-mask
    v-model="creditCard"
    :options="{ creditCard: true }"
    placeholder="**** **** **** ****"
    data-testid="credit-card"
  />
</template>
```
