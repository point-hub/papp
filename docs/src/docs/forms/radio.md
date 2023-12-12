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

| Name          | Type                                                                 | Default    | Description                  |
| ------------- | -------------------------------------------------------------------- | ---------- | ---------------------------- |
| v-model       | `Record<string, any>` `string` `number` `boolean` `null` `undefined` |            | v-model is `required`.       |
| id            | string                                                               |            | Input id.                    |
| label         | string                                                               |            | Input label.                 |
| description   | string                                                               |            | Input description.           |
| layout        | BaseFormLayoutType                                                   | `vertical` | Input layout.                |
| optionsLayout | BaseRadioOptionsLayout                                               | `vertical` | Input layout.                |
| required      | boolean                                                              | false      | if true input is `required`. |
| disabled      | boolean                                                              | false      | if true input is `disabled`. |
| helpers       | string[]                                                             |            | Input helper message.        |
| errors        | string[]                                                             |            | Input error message.         |
| options       | Record<string, any>[]                                                |            | Options to choose.           |

### Slot

`#default` slot for rendering custom option
