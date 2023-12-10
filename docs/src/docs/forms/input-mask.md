---
outline: deep
---

<script setup lang="ts">
import InputMaskExample from './demo/input-mask/input-mask-example.vue'
import InputMaskHelper from './demo/input-mask/input-mask-helper.vue'
</script>

# Input Mask

To provide an easy way to increase input field readability by formatting your typed data.

## Examples

### Input Mask

<!--@include: ./demo/input-mask/input-mask-example.md-->

### Helper

<!--@include: ./demo/input-mask/input-mask-helper.md-->

## Input Mask API

### Props

| Name        | Type                    | Default    | Description                       |
| ----------- | ----------------------- | ---------- | --------------------------------- |
| v-model     | string                  |            | v-model is `required`.            |
| id          | string                  |            | Input id.                         |
| label       | string                  |            | Input label.                      |
| description | string                  |            | Input description.                |
| placeholder | string                  |            | Input placeholder.                |
| border      | `simple` `full` `none`  | `simple`   | Input border.                     |
| layout      | `horizontal` `vertical` | `vertical` | Input layout.                     |
| required    | boolean                 | false      | if true input mask is `required`. |
| disabled    | boolean                 | false      | if true input mask is `disabled`. |
| helpers     | string[]                |            | Input helper message.             |
| errors      | string[]                |            | Input error message.              |
| options     | object                  |            | Cleave options                    |
