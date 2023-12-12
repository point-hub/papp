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

| Name        | Type                      | Default    | Description                  |
| ----------- | ------------------------- | ---------- | ---------------------------- |
| v-model     | BaseSelectOptionInterface |            | v-model is `required`.       |
| id          | string                    |            | Input id.                    |
| label       | string                    |            | Input label.                 |
| description | string                    |            | Input description.           |
| placeholder | string                    |            | Input placeholder.           |
| border      | BaseSelectBorderType      | `simple`   | Input border.                |
| layout      | BaseFormLayoutType        | `vertical` | Input layout.                |
| required    | boolean                   | false      | if true input is `required`. |
| disabled    | boolean                   | false      | if true input is `disabled`. |
| helpers     | string[]                  |            | Input helper message.        |
| errors      | string[]                  |            | Input error message.         |
