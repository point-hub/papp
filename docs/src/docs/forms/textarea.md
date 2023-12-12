---
outline: deep
---

<script setup lang="ts">
import TextareaExample from './demo/textarea/textarea-example.vue'
import TextareaLabel from './demo/textarea/textarea-label.vue'
import TextareaBorder from './demo/textarea/textarea-border.vue'
import TextareaHelper from './demo/textarea/textarea-helper.vue'
import TextareaHeight from './demo/textarea/textarea-height.vue'
</script>

# Textarea

The textarea component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

## Examples

### Textarea

<!--@include: ./demo/textarea/textarea-example.md-->

### Label

<!--@include: ./demo/textarea/textarea-label.md-->

### Border

<!--@include: ./demo/textarea/textarea-border.md-->

### Helper

<!--@include: ./demo/textarea/textarea-helper.md-->

### Height

<!--@include: ./demo/textarea/textarea-height.md-->

## Textarea API

### Types

```ts
export type BaseTextareaBorderType = 'simple' | 'full' | 'none'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name        | Type                   | Default | Description                     |
| ----------- | ---------------------- | ------- | ------------------------------- |
| v-model     | string                 |         | v-model is `required`.          |
| id          | string                 |         | Textarea id.                    |
| label       | string                 |         | Textarea label.                 |
| description | string                 |         | Textarea description.           |
| placeholder | string                 |         | Textarea placeholder.           |
| border      | BaseTextareaBorderType |         | Textarea border.                |
| layout      | BaseFormLayoutType     |         | Textarea layout.                |
| required    | boolean                | false   | if true textarea is `required`. |
| disabled    | boolean                | false   | if true textarea is `disabled`. |
| helpers     | string[]               |         | Textarea helper message.        |
| errors      | string[]               |         | Textarea error message.         |
| minHeight   | number                 |         | Textarea min height.            |
| maxHeight   | number                 |         | Textarea max height.            |
