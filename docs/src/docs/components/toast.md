---
outline: deep
---

<script setup lang="ts">
import ToastExample from './demo/toast/toast-example.vue'
</script>

# Toast

The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component

## Examples

<!--@include: ./demo/toast/toast-example.md-->

## Toast API

### Types

```ts
export type BaseToastColorType = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
```

### Slot

`#default` slot for rendering toast content
