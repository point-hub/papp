---
outline: deep
---

<script setup lang="ts">
import AlertColor from './demo/alert/alert-color.vue'
import AlertDismissable from './demo/alert/alert-dismissable.vue'
import AlertIcon from './demo/alert/alert-icon.vue'
import AlertTitle from './demo/alert/alert-title.vue'
import AlertSlot from './demo/alert/alert-slot.vue'
import AlertVariant from './demo/alert/alert-variant.vue'
</script>

# Alert

The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page.

## Examples

### Variant

<!--@include: ./demo/alert/alert-variant.md-->

### Color

<!--@include: ./demo/alert/alert-color.md-->

### Title

<!--@include: ./demo/alert/alert-title.md-->

### Dismissable

<!--@include: ./demo/alert/alert-dismissable.md-->

### With Icon

<!--@include: ./demo/alert/alert-icon.md-->

### Using Slot

<!--@include: ./demo/alert/alert-slot.md-->

## Alert API

### Types

```ts
export type BaseAlertColorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
export type BaseAlertIconType = 'info' | 'success' | 'warning' | 'danger'
export type BaseAlertVariantType = 'fill' | 'light' | 'outline'
```

### Props

| Name          | Type                 | Default   | Description    |
| ------------- | -------------------- | --------- | -------------- |
| variant       | BaseAlertVariantType | `fill`    | Alert variant. |
| color         | BaseAlertColorType   | `primary` | Alert color.   |
| title         | string               |           | Alert title.   |
| icon          | BaseAlertIconType    |           | Alert icon.    |
| isDismissable | boolean              | false     | Alert icon.    |

### Slot

`#default` slot for rendering alert content

`#title` slot for rendering title content
