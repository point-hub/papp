---
outline: deep
---

<script setup lang="ts">
import AvatarAnimate from './demo/avatar/avatar-animate.vue'
import AvatarColor from './demo/avatar/avatar-color.vue'
import AvatarShape from './demo/avatar/avatar-shape.vue'
import AvatarGroup from './demo/avatar/avatar-group.vue'
import AvatarInitial from './demo/avatar/avatar-initial.vue'
import AvatarIndicator from './demo/avatar/avatar-indicator.vue'
import AvatarSize from './demo/avatar/avatar-size.vue'
</script>

# Avatar

Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes

## Examples

### Shape

<!--@include: ./demo/avatar/avatar-shape.md-->

### Initial

<!--@include: ./demo/avatar/avatar-initial.md-->

### Color

<!--@include: ./demo/avatar/avatar-color.md-->

### Indicator

<!--@include: ./demo/avatar/avatar-indicator.md-->

### Size

<!--@include: ./demo/avatar/avatar-size.md-->

### Group

<!--@include: ./demo/avatar/avatar-group.md-->

### Animate

<!--@include: ./demo/avatar/avatar-animate.md-->

## Avatar Group API

### Slot

`#default` slot for rendering avatars

## Avatar API

### Types

```ts
export type BaseAvatarColorType =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type BaseAvatarShapeType = 'square' | 'squircle' | 'circle'
export type BaseAvatarSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
```

### Props

| Name           | Type                                                      | Default     | Description                |
| -------------- | --------------------------------------------------------- | ----------- | -------------------------- |
| name           | string                                                    |             | Avatar name is `required`. |
| src            | string                                                    |             | Avatar image source file.  |
| color          | `primary` `secondary` `info` `success` `warning` `danger` | `secondary` | Avatar color.              |
| size           | `xs` `sm` `base` `lg` `xl` `2xl`                          | `base`      | Avatar size.               |
| shape          | `square` `circle` `squircle`                              | `circle`    | Avatar shape.              |
| indicator      | boolean                                                   | false       | Avatar indicator.          |
| colorIndicator | `primary` `secondary` `info` `success` `warning` `danger` | `success`   | Avatar color indicator.    |
