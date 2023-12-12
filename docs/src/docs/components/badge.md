---
outline: deep
---

<script setup lang="ts">
import BadgeDot from './demo/badge/badge-dot.vue'
import BadgeVariant from './demo/badge/badge-variant.vue'
import BadgeIcon from './demo/badge/badge-icon.vue'
</script>

# Badge

Badges are used to inform user of the status of specific data.

## Examples

### Variant

<!--@include: ./demo/badge/badge-variant.md-->

### With Dot

<!--@include: ./demo/badge/badge-dot.md-->

### With Icon

<!--@include: ./demo/badge/badge-icon.md-->

## Badge API

### Types

```ts
export type BaseBadgeColorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
export type BaseBadgeVariantType = 'fill' | 'light' | 'outline'
```

### Props

| Name    | Type                 | Default   | Description    |
| ------- | -------------------- | --------- | -------------- |
| variant | BaseBadgeVariantType | `fill`    | Badge variant. |
| color   | BaseBadgeColorType   | `primary` | Badge color.   |

### Slot

`#default` slot for rendering button content
