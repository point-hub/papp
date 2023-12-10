---
outline: deep
---

<script setup lang="ts">
import InputExample from './demo/input/input-example.vue'
import InputLabel from './demo/input/input-label.vue'
import InputBorder from './demo/input/input-border.vue'
import InputHelper from './demo/input/input-helper.vue'
import InputGroup from './demo/input/input-group.vue'
</script>

# Input

The input element with a type attribute whose value is "text" represents a one-line plain text edit control for the input element’s value.

## Examples

### Input

<!--@include: ./demo/input/input-example.md-->

### Label

<!--@include: ./demo/input/input-label.md-->

### Border

<!--@include: ./demo/input/input-border.md-->

### Helper

<!--@include: ./demo/input/input-helper.md-->

### Group

<!--@include: ./demo/input/input-group.md-->

## Input API

### Props

| Name        | Type                                            | Default    | Description                  |
| ----------- | ----------------------------------------------- | ---------- | ---------------------------- |
| v-model     | string                                          |            | v-model is `required`.       |
| id          | string                                          |            | Input id.                    |
| label       | string                                          |            | Input label.                 |
| description | string                                          |            | Input description.           |
| placeholder | string                                          |            | Input placeholder.           |
| type        | `text` `tel` `email` `password` `date` `number` | `text`     | Input border.                |
| border      | `simple` `full` `none`                          | `simple`   | Input border.                |
| layout      | `horizontal` `vertical`                         | `vertical` | Input layout.                |
| required    | boolean                                         | false      | if true input is `required`. |
| disabled    | boolean                                         | false      | if true input is `disabled`. |
| helpers     | string[]                                        |            | Input helper message.        |
| errors      | string[]                                        |            | Input error message.         |

### Slot

`#prefix` slot for rendering input prefix like icon

`#suffix` slot for rendering input suffix like icon
