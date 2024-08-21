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

| Name          | Type                      | Default    | Description                  |
| ------------- | ------------------------- | ---------- | ---------------------------- |
| v-model       | string                    |            | v-model is `required`.       |
| id            | string                    |            | Input id.                    |
| label         | string                    |            | Input label.                 |
| description   | string                    |            | Input description.           |
| placeholder   | string                    |            | Input placeholder.           |
| align         | `left` `right`            | `right`    | Input align.                 |
| border        | BaseInputNumberBorderType | `simple`   | Input border.                |
| layout        | BaseFormLayoutType        | `vertical` | Input layout.                |
| decimalLength | number                    | 0          | Input decimal length.        |
| autofocus     | boolean                   | false      | Focus input on page load.    |
| required      | boolean                   | false      | if true input is `required`. |
| disabled      | boolean                   | false      | if true input is `disabled`. |
| helpers       | string[]                  |            | Input helper message.        |
| errors        | string[]                  |            | Input error message.         |
