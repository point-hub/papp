---
outline: deep
---

<script setup lang="ts">
import CardShadow from './demo/card/card-shadow.vue'
import CardShape from './demo/card/card-shape.vue'
import CardColor from './demo/card/card-color.vue'
</script>

# Card

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Examples

### Shadow

<!--@include: ./demo/card/card-shadow.md-->

### Shape

<!--@include: ./demo/card/card-shape.md-->

### Color

<!--@include: ./demo/card/card-color.md-->

## Card API

### Props

| Name       | Type              | Default | Description            |
| ---------- | ----------------- | ------- | ---------------------- |
| shadow     | boolean           | false   | Card Shadow.           |
| shape      | `rounded` `sharp` | `sharp` | Card Shape.            |
| bgColor    | string            |         | Card Background Color. |
| titleColor | string            |         | Card Title Text Color. |
| bodyColor  | string            |         | Card Body Text Color.  |

### Slot

`#header` slot for rendering card header

`#default` slot for rendering card body
