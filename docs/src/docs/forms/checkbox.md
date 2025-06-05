---
outline: deep
---

<script setup lang="ts">
import CheckboxExample from './demo/checkbox/checkbox-example.vue'
import CheckboxLabel from './demo/checkbox/checkbox-label.vue'
import CheckboxColor from './demo/checkbox/checkbox-color.vue'
import CheckboxHelper from './demo/checkbox/checkbox-helper.vue'
</script>

# Checkbox

The input element with a type attribute whose value is "text" represents a one-line plain text edit control for the input element’s value.

## Examples

### Checkbox

<!--@include: ./demo/checkbox/checkbox-example.md-->

### Label

<!--@include: ./demo/checkbox/checkbox-label.md-->

### Color

<!--@include: ./demo/checkbox/checkbox-color.md-->

### Helper

<!--@include: ./demo/checkbox/checkbox-helper.md-->

## Checkbox API

### Props

| Name           | Type                    | Default    | Description                     |
| -------------- | ----------------------- | ---------- | ------------------------------- |
| v-model        | string                  |            | v-model is `required`.          |
| v-model:errors | string[]                |            | Input error message.            |
| true-value     | string                  | true       | Checkbox checked value.         |
| false-value    | string                  | false      | Checkbox unchecked value.       |
| label          | string                  |            | Checkbox label.                 |
| text           | string                  |            | Checkbox text.                  |
| description    | string                  |            | Input description.              |
| layout         | `horizontal` `vertical` | `vertical` | Input layout.                   |
| required       | boolean                 | false      | if true checkbox is `required`. |
| helpers        | string[]                |            | Input helper message.           |
| data-testid    | string                  |            | Testing ID.                     |

## Automated Test Guide

If you pass a `data-testid` to the `<base-checkbox>` component, it will automatically generate unique `data-testid` attributes for testing.

### Gherkin Scenario

```feature
When I toggle checkbox "check-agreement"
```

### Step Definition

```ts
When('I toggle checkbox {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})
```

### Code Implementation

```vue
<script setup>
import { ref } from 'vue'

const agreement = ref(false)
</script>

<template>
  <base-checkbox v-model="agreement" data-testid="check-agreement" />
</template>
```
