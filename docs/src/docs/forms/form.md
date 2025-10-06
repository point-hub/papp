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

### Types

```ts
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name        | Type               | Default      | Description              |
|-------------|--------------------|--------------|--------------------------|
| id          | string             |              | Form id.                 |
| label       | string             |              | Form label.              |
| description | string             |              | Form description.        |
| layout      | BaseFormLayoutType | `horizontal` | Form layout.             |
| required    | boolean            | false        | Form required indicator. |
| helpers     | string[]           |              | Form helper message.     |
| errors      | string[]           |              | Form error message.      |

### Slot

`#default` slot for rendering form content
