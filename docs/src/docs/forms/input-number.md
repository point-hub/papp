---
outline: deep
---

<script setup lang="ts">
import InputNumberExample from './demo/input-number/input-number-example.vue'
import InputNumberLabel from './demo/input-number/input-number-label.vue'
import InputNumberBorder from './demo/input-number/input-number-border.vue'
import InputNumberHelper from './demo/input-number/input-number-helper.vue'
</script>

# Input Number

The input element with formatting and manipulating numbers.

## Examples

### Input Number

<!--@include: ./demo/input-number/input-number-example.md-->

### Label

<!--@include: ./demo/input-number/input-number-label.md-->

### Border

<!--@include: ./demo/input-number/input-number-border.md-->

### Helper

<!--@include: ./demo/input-number/input-number-helper.md-->

## Input Number API

### Types

```ts
export type BaseInputNumberBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = `horizontal` `vertical`
```

### Props

| Name           | Type                      | Default    | Description                  |
| -------------- | ------------------------- | ---------- | ---------------------------- |
| v-model        | string                    |            | v-model is `required`.       |
| v-model:errors | string[]                  |            | Input error message.         |
| label          | string                    |            | Input label.                 |
| description    | string                    |            | Input description.           |
| align          | `left` `right`            | `right`    | Input align.                 |
| border         | BaseInputNumberBorderType | `simple`   | Input border.                |
| layout         | BaseFormLayoutType        | `vertical` | Input layout.                |
| decimalLength  | number                    | 0          | Input decimal length.        |
| required       | boolean                   | false      | if true input is `required`. |
| helpers        | string[]                  |            | Input helper message.        |
| data-testid    | string                    |            | Testing ID.                  |

## Automated Test Guide

If you pass a `data-testid` to the `<base-input-number>` component, it will automatically generate unique `data-testid` attributes for testing.

### Gherkin Scenario

```txt
When I type "15000" into "price"
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

const price = ref()
</script>

<template>
  <base-input-number v-model="price" data-testid="price" />
</template>
```
