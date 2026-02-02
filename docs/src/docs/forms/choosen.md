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

| Name           | Type                                      | Default      | Description                                                    |
| -------------- | ----------------------------------------- | ------------ | -------------------------------------------------------------- |
| v-model        | `string \| null`                          | —            | **Required.** Selected option value (id).                      |
| v-model:search | `string`                                  | `''`         | Search keyword inside modal.                                   |
| v-model:errors | `string[]`                                | —            | Input error messages.                                          |
| options        | `IOption[]`                               | `[]`         | Available options (can be partial / paginated).                |
| resolveOption  | `(value: string) => IOption \| undefined` | —            | Resolve option when value exists but option is not loaded yet. |
| title          | `string`                                  | —            | Modal title.                                                   |
| label          | `string`                                  | —            | Input label.                                                   |
| description    | `string`                                  | —            | Input description.                                             |
| placeholder    | `string`                                  | —            | Input placeholder.                                             |
| border         | `BorderType`                              | `full`       | Input border style.                                            |
| layout         | `BaseFormLayoutType`                      | `horizontal` | Form layout.                                                   |
| autofocus      | `boolean`                                 | `false`      | Focus search input when modal opens.                           |
| required       | `boolean`                                 | `false`      | Mark input as required.                                        |
| disabled       | `boolean`                                 | `false`      | Disable interaction.                                           |
| readonly       | `boolean`                                 | `false`      | Read-only mode.                                                |
| helpers        | `string[]`                                | —            | Helper messages below input.                                   |
| paddingless    | `boolean`                                 | `false`      | Remove input padding.                                          |
| isLoading      | `boolean`                                 | `false`      | Show loading state in option list.                             |
| data-testid    | `string`                                  | —            | Testing identifier.                                            |

### Events

| Name   | Payload                | Description                                                         |
| ------ | ---------------------- | ------------------------------------------------------------------- |
| select | `IOption \| undefined` | Emits full option object when selected or `undefined` when cleared. |

### Slots

| Name    | Props                 | Description                              |
| ------- | --------------------- | ---------------------------------------- |
| default | `{ option: IOption }` | Customize option rendering inside modal. |


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

```txt
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
