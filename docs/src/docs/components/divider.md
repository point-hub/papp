---
outline: deep
---

<script setup lang="ts">
import DividerHorizontal from './demo/divider/divider-horizontal.vue'
import DividerVertical from './demo/divider/divider-vertical.vue'
import DividerTextHorizontal from './demo/divider/divider-text-horizontal.vue'
import DividerTextVertical from './demo/divider/divider-text-vertical.vue'
</script>

# Divider

Divider is nothing but a partitioning element that has specific dimensions

## Examples

### Horizontal

<!--@include: ./demo/divider/divider-horizontal.md-->

### Horizontal with text

<!--@include: ./demo/divider/divider-text-horizontal.md-->

### Vertical

<!--@include: ./demo/divider/divider-vertical.md-->

### Vertical with text

<!--@include: ./demo/divider/divider-text-vertical.md-->

## Divider API

### Props

| Name        | Type                    | Default | Description                        |
| ----------- | ----------------------- | ------- | ---------------------------------- |
| orientation | `horizontal` `vertical` |         | Divider orientation is `required`. |
| text        | string                  |         | Divider text.                      |
