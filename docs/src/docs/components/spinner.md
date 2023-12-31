---
outline: deep
---

<script setup lang="ts">
import SpinnerColor from './demo/spinner/spinner-color.vue'
import SpinnerSize from './demo/spinner/spinner-size.vue'
import SpinnerIcon from './demo/spinner/spinner-icon.vue'
</script>

# Spinner

A Spinner component is used to show the user a timely process is currently taking place.

## Examples

### Color

<!--@include: ./demo/spinner/spinner-color.md-->

### Size

<!--@include: ./demo/spinner/spinner-size.md-->

### With SVG Icon

<!--@include: ./demo/spinner/spinner-icon.md-->

## Spinner API

### Types

```ts
export type BaseSpinnerColorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'white'

export type BaseSpinnerSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
```

### Props

| Name  | Type                 | Default   | Description   |
| ----- | -------------------- | --------- | ------------- |
| color | BaseSpinnerColorType | `primary` | Button color. |
| size  | BaseSpinnerSizeType  | `md`      | Button size.  |
