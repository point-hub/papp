---
outline: deep
---

<script setup lang="ts">
import DatepickerExample from './demo/datepicker/datepicker-example.vue'
import DatepickerLabel from './demo/datepicker/datepicker-label.vue'
import DatepickerBorder from './demo/datepicker/datepicker-border.vue'
import DatepickerHelper from './demo/datepicker/datepicker-helper.vue'
</script>

# Datepicker

The Datepicker is used to allow the user to select a date, and to display that date in the specified format.

## Examples

### Datepicker

<!--@include: ./demo/datepicker/datepicker-example.md-->

### Label

<!--@include: ./demo/datepicker/datepicker-label.md-->

### Border

<!--@include: ./demo/datepicker/datepicker-border.md-->

### Helper

<!--@include: ./demo/datepicker/datepicker-helper.md-->

## Datepicker API

### Types

```ts
export type BaseDatepickerBorderType = 'simple' | 'full' | 'none'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name           | Type                     | Default    | Description                       |
| -------------- | ------------------------ | ---------- | --------------------------------- |
| v-model        | string                   |            | v-model is `required`.            |
| v-model:errors | string[]                 |            | Input error message.              |
| id             | string                   |            | Input id.                         |
| label          | string                   |            | Input label.                      |
| description    | string                   |            | Input description.                |
| border         | BaseDatepickerBorderType | `simple`   | Input border.                     |
| layout         | BaseFormLayoutType       | `vertical` | Input layout.                     |
| autofocus      | boolean                  | false      | Focus input on page load.         |
| required       | boolean                  | false      | if true datepicker is `required`. |
| disabled       | boolean                  | false      | if true datepicker is `disabled`. |
| helpers        | string[]                 |            | Input helper message.             |
| data-testid    | string                   |            | Testing ID.                       |

## Automated Test Guide

If you pass a `data-testid` to the `<base-datepicker>` component, it will automatically generate unique `data-testid` attributes for testing.

### Gherkin Scenario

```txt
When I type "2025-01-01" into "form-date"
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

const agreement = ref()
</script>

<template>
  <base-datepicker v-model="agreement" data-testid="form-date" />
</template>
```
