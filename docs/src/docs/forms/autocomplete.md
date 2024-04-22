---
outline: deep
---

<script setup lang="ts">
import AutocompleteExample from './demo/autocomplete/autocomplete-example.vue'
import AutocompleteLabel from './demo/autocomplete/autocomplete-label.vue'
import AutocompleteBorder from './demo/autocomplete/autocomplete-border.vue'
import AutocompleteHelper from './demo/autocomplete/autocomplete-helper.vue'
</script>

# Autocomplete

Autocomplete gives you a customizable select box with support for searching, tagging, remote data sets, infinite scrolling, and many other highly used options.

## Examples

### Autocomplete

<!--@include: ./demo/autocomplete/autocomplete-example.md-->

### Label

<!--@include: ./demo/autocomplete/autocomplete-label.md-->

### Border

<!--@include: ./demo/autocomplete/autocomplete-border.md-->

### Helper

<!--@include: ./demo/autocomplete/autocomplete-helper.md-->

## Autocomplete API

### Types

```ts
export type BaseAutocompleteBorderType = 'none' | 'simple' | 'full'
export type BaseFormLayoutType = 'vertical' | 'horizontal'
```

### Props

| Name        | Type                       | Default    | Description                  |
| ----------- | -------------------------- | ---------- | ---------------------------- |
| v-model     | string                     |            | v-model is `required`.       |
| id          | string                     |            | Input id.                    |
| label       | string                     |            | Input label.                 |
| description | string                     |            | Input description.           |
| placeholder | string                     |            | Input placeholder.           |
| border      | BaseAutocompleteBorderType | `simple`   | Input border.                |
| layout      | BaseFormLayoutType         | `vertical` | Input layout.                |
| autofocus   | boolean                    | false      | Focus input on page load.    |
| required    | boolean                    | false      | if true input is `required`. |
| disabled    | boolean                    | false      | if true input is `disabled`. |
| helpers     | string[]                   |            | Input helper message.        |
| errors      | string[]                   |            | Input error message.         |
