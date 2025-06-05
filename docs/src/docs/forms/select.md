---
outline: deep
---

<script setup lang="ts">
import SelectExample from './demo/select/select-example.vue'
import SelectLabel from './demo/select/select-label.vue'
import SelectBorder from './demo/select/select-border.vue'
import SelectHelper from './demo/select/select-helper.vue'
</script>

# Select

The select element is used to create a drop-down list. The select element is most often used in a form, to collect user input

## Examples

### Select

<!--@include: ./demo/select/select-example.md-->

### Label

<!--@include: ./demo/select/select-label.md-->

### Border

<!--@include: ./demo/select/select-border.md-->

### Helper

<!--@include: ./demo/select/select-helper.md-->

## Select API

### Types

```ts
export interface BaseSelectOptionInterface {
  label: string
  [key: string]: any
}
export type BaseSelectBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name           | Type                      | Default    | Description                  |
| -------------- | ------------------------- | ---------- | ---------------------------- |
| v-model        | BaseSelectOptionInterface |            | v-model is `required`.       |
| v-model:errors | string[]                  |            | Input error message.         |
| id             | string                    |            | Input id.                    |
| label          | string                    |            | Input label.                 |
| description    | string                    |            | Input description.           |
| placeholder    | string                    |            | Input placeholder.           |
| border         | BaseSelectBorderType      | `simple`   | Input border.                |
| layout         | BaseFormLayoutType        | `vertical` | Input layout.                |
| required       | boolean                   | false      | if true input is `required`. |
| disabled       | boolean                   | false      | if true input is `disabled`. |
| helpers        | string[]                  |            | Input helper message.        |
| data-testid    | string                    |            | Testing ID.                  |

## Automated Test Guide

If you pass a `data-testid` to the `<base-select>` component, it will automatically generate unique `data-testid` attributes for testing:

For example, if you set `data-testid="user-select"`, the component will generate the following attributes:

| Element               | `data-testid`              |
| --------------------- | -------------------------- |
| Input Field           | `user-select-input`        |
| Option with `_id = 1` | `user-select-1`            |
| Option with `_id = 2` | `user-select-2`            |
| Clear Button          | `user-select-clear-button` |

### Gherkin Scenario

```feature
When I type "Durward" into "user-select-input"
And I click select option "user-select-option-1"
And I click select clear button "user-select-clear-button"
```

### Step Definition

```ts
When('I click select input {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click select clear button {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})
```

### Code Implementation

```vue
<script setup>
import { ref } from 'vue'

const userOptions = [
  { _id: '1', label: 'Durward Reynolds' },
  { _id: '2', label: 'Kenton Towne' },
  { _id: '3', label: 'Therese Wunsch' },
  { _id: '4', label: 'Benedict Kessler' }
]
const userSelected = ref()
</script>

<template>
  <base-select v-model="userSelected" :options="userOptions" data-testid="user-select" />
</template>
```
