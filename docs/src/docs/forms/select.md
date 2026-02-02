---
outline: deep
---

<script setup lang="ts">
import SelectExample from './demo/select/select-example.vue'
</script>

# Select

Select gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.

## Examples

<!--@include: ./demo/select/select-example.md-->

## Select API

### Types

```ts
export type BaseSelectBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name           | Type                                               | Default      | Description                                                         |
| -------------- | -------------------------------------------------- | ------------ | ------------------------------------------------------------------- |
| v-model        | `string \| null`                                   | —            | **Required.** Selected option value.                                |
| v-model:search | `string`                                           | `''`         | Search keyword (optional, controlled).                              |
| v-model:errors | `string[]`                                         | —            | Input error messages.                                               |
| options        | `BaseSelectOptionInterface[]`                               | `[]`         | Available options (can be partial / paginated).                     |
| resolveOption  | `(value: string) => BaseSelectOptionInterface \| undefined` | —            | Resolve full option when value exists but option is not loaded yet. |
| label          | `string`                                           | —            | Input label.                                                        |
| description    | `string`                                           | —            | Input description.                                                  |
| placeholder    | `string`                                           | —            | Input placeholder.                                                  |
| border         | `BaseSelectBorderType`                             | `full`       | Input border style.                                                 |
| layout         | `BaseFormLayoutType`                               | `horizontal` | Form layout.                                                        |
| autofocus      | `boolean`                                          | `false`      | Focus input on mount.                                               |
| required       | `boolean`                                          | `false`      | Mark input as required.                                             |
| disabled       | `boolean`                                          | `false`      | Disable input interaction.                                          |
| readonly       | `boolean`                                          | `false`      | Read-only mode.                                                     |
| helpers        | `string[]`                                         | —            | Helper messages below input.                                        |
| isLoading      | `boolean`                                          | `false`      | Show loading state in options list.                                 |
| data-testid    | `string`                                           | —            | Testing identifier.                                                 |

## Automated Test Guide

If you pass a `data-testid` to the `<base-select>` component, it will automatically generate unique `data-testid` attributes for testing:

For example, if you set `data-testid="user-select"`, the component will generate the following attributes:

| Element               | `data-testid`                    |
| --------------------- | -------------------------------- |
| Input Field           | `user-select-input`        |
| Option with `_id = 1` | `user-select-1`            |
| Option with `_id = 2` | `user-select-2`            |
| Clear Button          | `user-select-clear-button` |

### Gherkin Scenario

```txt
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
  <base-select
    v-model="userSelected"
    :options="userOptions"
    data-testid="user-select"
  />
</template>
```
