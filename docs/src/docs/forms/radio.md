---
outline: deep
---

<script setup lang="ts">
import RadioExample from './demo/radio/radio-example.vue'
import RadioLabel from './demo/radio/radio-label.vue'
import RadioHelper from './demo/radio/radio-helper.vue'
import RadioSlot from './demo/radio/radio-slot.vue'
</script>

# Radio

The input element with a type attribute whose value is "text" represents a one-line plain text edit control for the input element’s value.

## Examples

### Radio

<!--@include: ./demo/radio/radio-example.md-->

### Label

<!--@include: ./demo/radio/radio-label.md-->

### Helper

<!--@include: ./demo/radio/radio-helper.md-->

### Using Slot

<!--@include: ./demo/radio/radio-slot.md-->

## Input API

### Types

```ts
export type BaseFormLayoutType = 'vertical' | 'horizontal'
export type BaseRadioOptionsLayout = 'vertical' | 'horizontal'
```

### Props

| Name           | Type                                                                 | Default    | Description                  |
| -------------- | -------------------------------------------------------------------- | ---------- | ---------------------------- |
| v-model        | `Record<string, any>` `string` `number` `boolean` `null` `undefined` |            | v-model is `required`.       |
| v-model:errors | string[]                                                             |            | Input error message.         |
| id             | string                                                               |            | Input id.                    |
| label          | string                                                               |            | Input label.                 |
| description    | string                                                               |            | Input description.           |
| layout         | BaseFormLayoutType                                                   | `vertical` | Input layout.                |
| optionsLayout  | BaseRadioOptionsLayout                                               | `vertical` | Input layout.                |
| required       | boolean                                                              | false      | if true input is `required`. |
| disabled       | boolean                                                              | false      | if true input is `disabled`. |
| helpers        | string[]                                                             |            | Input helper message.        |
| options        | Record<string, any>[]                                                |            | Options to choose.           |
| data-testid    | string                                                               |            | Testing ID.                  |

### Slot

`#default` slot for rendering custom option

## Automated Test Guide

If you pass a `data-testid` to the `<base-radio>` component, it will automatically generate unique `data-testid` attributes for testing.

For example, if you set `data-testid="grade"`, the component will generate the following attributes:

| Element                      | `data-testid`  |
| ---------------------------- | -------------- |
| Option with `value = rank-1` | `grade-rank-1` |
| Option with `value = rank-2` | `grade-rank-2` |
| Option with `value = rank-3` | `grade-rank-3` |

### Gherkin Scenario

```txt
When I click radio "grade-rank-1"
```

### Step Definition

```ts
When('I click radio {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})
```

### Code Implementation

```vue
<script setup>
import { ref } from 'vue'

const radioOptions = [
  { label: 'Rank 1', value: 'rank-1' },
  { label: 'Rank 2', value: 'rank-2' },
  { label: 'Rank 3', value: 'rank-3' }
]
const radioSelected = ref()
</script>

<template>
  <base-radio :options="radioOptions" v-model="radioSelected" data-testid="grade" />
</template>
```
