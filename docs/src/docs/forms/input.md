---
outline: deep
---

<script setup lang="ts">
import InputExample from './demo/input/input-example.vue'
import InputLabel from './demo/input/input-label.vue'
import InputBorder from './demo/input/input-border.vue'
import InputHelper from './demo/input/input-helper.vue'
import InputGroup from './demo/input/input-group.vue'
</script>

# Input

The input element with a type attribute whose value is "text" represents a one-line plain text edit control for the input element’s value.

## Examples

### Input

<!--@include: ./demo/input/input-example.md-->

### Label

<!--@include: ./demo/input/input-label.md-->

### Border

<!--@include: ./demo/input/input-border.md-->

### Helper

<!--@include: ./demo/input/input-helper.md-->

### Group

<!--@include: ./demo/input/input-group.md-->

## Input API

### Types

```ts
export type BaseInputBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = `horizontal` `vertical`
```

### Props

| Name           | Type                | Default      | Description            |
|----------------|---------------------|--------------|------------------------|
| v-model        | string              |              | v-model is `required`. |
| v-model:errors | string[]            |              | Input error message.   |
| label          | string              |              | Form label.            |
| description    | string              |              | Input description.     |
| required       | boolean             | `false`      | Input required.        |
| border         | BaseInputBorderType | `full`       | Input border.          |
| layout         | BaseFormLayoutType  | `horizontal` | Input layout.          |
| helpers        | string[]            |              | Input helper message.  |
| data-testid    | string              |              | Testing ID.            |

### Slot

`#prefix` slot for rendering input prefix like icon

`#suffix` slot for rendering input suffix like icon

## Automated Test Guide

If you pass a `data-testid` to the `<base-input>` component, it will automatically generate unique `data-testid` attributes for testing.

### Gherkin Scenario

```txt
When I type "John Doe" into "name"
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

const name = ref()
</script>

<template>
  <base-input v-model="name" data-testid="name" />
</template>
```
