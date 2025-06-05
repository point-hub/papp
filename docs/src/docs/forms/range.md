---
outline: deep
---

<script setup lang="ts">
import RangeExample from './demo/range/range-example.vue'
import RangeLabel from './demo/range/range-label.vue'
import RangeText from './demo/range/range-text.vue'
import RangeHelper from './demo/range/range-helper.vue'

</script>

# Range

Let the user specify a numeric value which must be no less than a given value, and no more than another given value. The precise value, however, is not considered important. This is typically represented using a slider or dial control rather than a text entry box like the number input type.

## Examples

### Range

<!--@include: ./demo/range/range-example.md-->

### Label

<!--@include: ./demo/range/range-label.md-->

### Text

<!--@include: ./demo/range/range-text.md-->

### Helper

<!--@include: ./demo/range/range-helper.md-->

## Range API

### Types

```ts
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name           | Type               | Default    | Description                  |
| -------------- | ------------------ | ---------- | ---------------------------- |
| v-model        | string             |            | v-model is `required`.       |
| v-model:errors | string[]           |            | Input error message.         |
| id             | string             |            | Input id.                    |
| label          | string             |            | Input label.                 |
| description    | string             |            | Input description.           |
| layout         | BaseFormLayoutType | `vertical` | Input layout.                |
| show-text      | boolean            | false      | Show range value.            |
| disabled       | boolean            | false      | if true range is `disabled`. |
| helpers        | string[]           |            | Input helper message.        |
| data-testid    | string             |            | Testing ID.                  |

## Automated Test Guide

If you pass a `data-testid` to the `<base-range>` component, it will automatically generate unique `data-testid` attributes for testing.

### Gherkin Scenario

```feature
When I change range "speed" into "25"
```

### Step Definition

```ts
When('I change range {string} to {string}', (selector: string, value: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})
```

### Code Implementation

```vue
<script setup>
import { ref } from 'vue'

const speed = ref(0)
</script>

<template>
  <base-range v-model="speed" data-testid="speed" />
</template>
```
