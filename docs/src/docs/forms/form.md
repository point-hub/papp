---
outline: deep
---

<script setup lang="ts">
import FormExample from './demo/form/form-example.vue'
</script>

# Form

The container for different types of input elements

## Examples

### Form

<!--@include: ./demo/form/form-example.md-->

## Form API

### Props

| Name        | Type                                            | Default    | Description                  |
| ----------- | ----------------------------------------------- | ---------- | ---------------------------- |
| v-model     | string                                          |            | v-model is `required`.       |
| id          | string                                          |            | Form id.                     |
| label       | string                                          |            | Form label.                  |
| description | string                                          |            | Form description.            |
| placeholder | string                                          |            | Form placeholder.            |
| type        | `text` `tel` `email` `password` `date` `number` | `text`     | Form border.                 |
| border      | `simple` `full` `none`                          | `simple`   | Form border.                 |
| layout      | `horizontal` `vertical`                         | `vertical` | Form layout.                 |
| required    | boolean                                         | false      | if true input is `required`. |
| disabled    | boolean                                         | false      | if true input is `disabled`. |
| helpers     | string[]                                        |            | Form helper message.         |
| errors      | string[]                                        |            | Form error message.          |

### Slot

`#prefix` slot for rendering input prefix like icon

`#suffix` slot for rendering input suffix like icon
