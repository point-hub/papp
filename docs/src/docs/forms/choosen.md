---
outline: deep
---

<script setup lang="ts">
import ChoosenExample from './demo/choosen/choosen-example.vue'
</script>

# Choosen

Choosen is select with modal dialog gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.

## Examples

### Choosen

<!--@include: ./demo/choosen/choosen-example.md-->

## Choosen API

### Props

| Name           | Type                    | Default    | Description                    |
| -------------- | ----------------------- | ---------- | ------------------------------ |
| v-model        | string                  |            | v-model is `required`.         |
| v-model:errors | string[]                |            | Input error message.           |
| mode           | `input` `text`          | `input`    | Choosen mode.                  |
| label          | string                  |            | Choosen label.                 |
| label          | string                  |            | Choosen label.                 |
| text           | string                  |            | Choosen text.                  |
| description    | string                  |            | Input description.             |
| placeholder    | string                  |            | Input placeholder.             |
| layout         | `horizontal` `vertical` | `vertical` | Input layout.                  |
| required       | boolean                 | false      | if true choosen is `required`. |
| disabled       | boolean                 | false      | if true choosen is `disabled`. |
| helpers        | string[]                |            | Input helper message.          |
| data-testid    | string                  |            | Testing ID.                    |

## Automated Test Guide

If you pass a `data-testid` to the `<base-choosen>` component, it will automatically generate unique `data-testid` attributes for testing:

For example, if you set `data-testid="user-choosen"`, the component will generate the following attributes:

| Element               | `data-testid`               |
| --------------------- | --------------------------- |
| Input Field           | `user-choosen-input`        |
| Search Field          | `user-choosen-search`       |
| Option with `_id = 1` | `user-choosen-1`            |
| Option with `_id = 2` | `user-choosen-2`            |
| Clear Button          | `user-choosen-clear-button` |

### Gherkin Scenario

```feature
When I click choosen input "user-choosen-input"
And I type "Durward" into "user-choosen-search"
And I click choosen option "user-choosen-option-1"
And I click choosen clear button "user-choosen-clear-button"
```

### Step Definition

```ts
When('I click choosen input {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I click choosen clear button {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})

When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid="${selector}"]`).type(value)
})

When('I click choosen option {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
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
  <base-choosen v-model="userSelected" :options="userOptions" data-testid="user-choosen" />
</template>
```
