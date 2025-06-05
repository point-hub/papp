---
outline: deep
---

<script setup lang="ts">
import AutocompleteExample from './demo/autocomplete/autocomplete-example.vue'
import AutocompleteLabel from './demo/autocomplete/autocomplete-label.vue'
import AutocompleteBorder from './demo/autocomplete/autocomplete-border.vue'
import AutocompleteHelper from './demo/autocomplete/autocomplete-helper.vue'
</script>

# Autocomplete

Autocomplete gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.

## Examples

### Autocomplete

<!--@include: ./demo/autocomplete/autocomplete-example.md-->

### Label

<!--@include: ./demo/autocomplete/autocomplete-label.md-->

### Border

<!--@include: ./demo/autocomplete/autocomplete-border.md-->

### Helper

<!--@include: ./demo/autocomplete/autocomplete-helper.md-->

## Autocomplete API

### Types

```ts
export type BaseAutocompleteBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name           | Type                       | Default    | Description                    |
| -------------- | -------------------------- | ---------- | ------------------------------ |
| v-model        | string                     |            | v-model is `required`.         |
| v-model:errors | string[]                   |            | Input error message.           |
| id             | string                     |            | Input ID.                      |
| label          | string                     |            | Input label.                   |
| description    | string                     |            | Input description.             |
| placeholder    | string                     |            | Input placeholder.             |
| border         | BaseAutocompleteBorderType | `simple`   | Input border.                  |
| layout         | BaseFormLayoutType         | `vertical` | Input layout.                  |
| autofocus      | boolean                    | `false`    | Focus input on page load.      |
| required       | boolean                    | `false`    | if `true` input is `required`. |
| disabled       | boolean                    | `false`    | if `true` input is `disabled`. |
| helpers        | string[]                   |            | Input helper message.          |
| data-testid    | string                     |            | Testing ID.                    |

## Automated Test Guide

If you pass a `data-testid` to the `<base-autocomplete>` component, it will automatically generate unique `data-testid` attributes for testing:

For example, if you set `data-testid="user-autocomplete"`, the component will generate the following attributes:

| Element               | `data-testid`                    |
| --------------------- | -------------------------------- |
| Input Field           | `user-autocomplete-input`        |
| Option with `_id = 1` | `user-autocomplete-1`            |
| Option with `_id = 2` | `user-autocomplete-2`            |
| Clear Button          | `user-autocomplete-clear-button` |

### Gherkin Scenario

```txt
When I type "Durward" into "user-autocomplete-input"
And I click autocomplete option "user-autocomplete-option-1"
And I click autocomplete clear button "user-autocomplete-clear-button"
```

### Step Definition

```ts
When('I click autocomplete input {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click autocomplete clear button {string}', (selector: string) => {
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
  <base-autocomplete
    v-model="userSelected"
    :options="userOptions"
    data-testid="user-autocomplete"
  />
</template>
```
