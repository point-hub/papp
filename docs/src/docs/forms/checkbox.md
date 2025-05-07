---
outline: deep
---

<script setup lang="ts">
import CheckboxExample from './demo/checkbox/checkbox-example.vue'
import CheckboxLabel from './demo/checkbox/checkbox-label.vue'
import CheckboxColor from './demo/checkbox/checkbox-color.vue'
import CheckboxHelper from './demo/checkbox/checkbox-helper.vue'
</script>

# Checkbox

The input element with a type attribute whose value is "text" represents a one-line plain text edit control for the input element’s value.

## Examples

### Checkbox

<!--@include: ./demo/checkbox/checkbox-example.md-->

### Label

<!--@include: ./demo/checkbox/checkbox-label.md-->

### Color

<!--@include: ./demo/checkbox/checkbox-color.md-->

### Helper

<!--@include: ./demo/checkbox/checkbox-helper.md-->

## Checkbox API

### Props

| Name           | Type                    | Default    | Description                     |
| -------------- | ----------------------- | ---------- | ------------------------------- |
| v-model        | string                  |            | v-model is `required`.          |
| v-model:errors | string[]                |            | Input error message.            |
| true-value     | string                  | true       | Checkbox checked value.         |
| false-value    | string                  | false      | Checkbox unchecked value.       |
| label          | string                  |            | Checkbox label.                 |
| text           | string                  |            | Checkbox text.                  |
| description    | string                  |            | Input description.              |
| placeholder    | string                  |            | Input placeholder.              |
| layout         | `horizontal` `vertical` | `vertical` | Input layout.                   |
| required       | boolean                 | false      | if true checkbox is `required`. |
| disabled       | boolean                 | false      | if true checkbox is `disabled`. |
| helpers        | string[]                |            | Input helper message.           |
