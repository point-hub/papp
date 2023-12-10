---
outline: deep
---

<script setup lang="ts">
import MaskSquircle from './demo/mask/mask-squircle.vue'
import MaskDiamond from './demo/mask/mask-diamond.vue'
import MaskHeart from './demo/mask/mask-heart.vue'
import MaskReuleauxTriangle from './demo/mask/mask-reuleaux-triangle.vue'
import MaskOctagon from './demo/mask/mask-octagon.vue'
import MaskHexagon from './demo/mask/mask-hexagon.vue'
import MaskStar from './demo/mask/mask-star.vue'
</script>

# Mask

Mask crops the content of the element to common shapes.

## Examples

### Squircle

<!--@include: ./demo/mask/mask-squircle.md-->

### Diamond

<!--@include: ./demo/mask/mask-diamond.md-->

### Reuleaux Triangle

<!--@include: ./demo/mask/mask-reuleaux-triangle.md-->

### Heart

<!--@include: ./demo/mask/mask-heart.md-->

### Octagon

<!--@include: ./demo/mask/mask-octagon.md-->

### Hexagon

<!--@include: ./demo/mask/mask-hexagon.md-->

### Star

<!--@include: ./demo/mask/mask-star.md-->

## Mask API

### Props

| Name  | Type                                                                                             | Default | Description                 |
| ----- | ------------------------------------------------------------------------------------------------ | ------- | --------------------------- |
| src   | string                                                                                           |         | Image source is `required`. |
| shape | `squircle` `diamond` `reuleaux triangle` `heart` `octagon` `hexagon` `hexagon-2` `star` `star-2` |         | Image masking shape.        |
