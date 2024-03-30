---
outline: deep
---

<script setup lang="ts">
import CardShadow from './demo/card/card-shadow.vue'
import CardShape from './demo/card/card-shape.vue'
</script>

# Card

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Examples

### Shadow

<!--@include: ./demo/card/card-shadow.md-->

### Shape

<!--@include: ./demo/card/card-shape.md-->

## Card API

### Props

| Name   | Type              | Default   | Description  |
| ------ | ----------------- | --------- | ------------ |
| shadow | boolean           | true      | Card Shadow. |
| shape  | `rounded` `sharp` | `rounded` | Card Shape.  |

### Slot

`#header` slot for rendering card header

`#default` slot for rendering card body
