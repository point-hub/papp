---
outline: deep
---

<script setup lang="ts">
import ProgressColor from './demo/progress/progress-color.vue'
import ProgressSize from './demo/progress/progress-size.vue'
import ProgressIndeterminate from './demo/progress/progress-indeterminate.vue'
import ProgressLabel from './demo/progress/progress-label.vue'
</script>

# Progress

The Progress component displays a loading bar.

## Examples

### Color

<!--@include: ./demo/progress/progress-color.md-->

### Size

<!--@include: ./demo/progress/progress-size.md-->

### Indeterminate

<!--@include: ./demo/progress/progress-indeterminate.md-->

### Label

<!--@include: ./demo/progress/progress-label.md-->

## Progress API

### Props

| Name             | Type                                                      | Default   | Description                 |
| ---------------- | --------------------------------------------------------- | --------- | --------------------------- |
| color            | `primary` `secondary` `info` `success` `warning` `danger` | `primary` | Progress color.             |
| size             | `xs` `sm` `md` `lg` `xl` `2xl`                            | `md`      | Progress size.              |
| isInderterminate | boolean                                                   | false     | Infinite loading animation. |

### Slot

`#default` slot for rendering label
