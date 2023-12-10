---
outline: deep
---

<script setup lang="ts">
import ButtonBlock from './demo/button/button-block.vue'
import ButtonColor from './demo/button/button-color.vue'
import ButtonColorOutline from './demo/button/button-color-outline.vue'
import ButtonColorLight from './demo/button/button-color-light.vue'
import ButtonColorText from './demo/button/button-color-text.vue'
import ButtonDisabled from './demo/button/button-disabled.vue'
import ButtonIcon from './demo/button/button-icon.vue'
import ButtonLoading from './demo/button/button-loading.vue'
import ButtonShape from './demo/button/button-shape.vue'
import ButtonSize from './demo/button/button-size.vue'
import ButtonVariant from './demo/button/button-variant.vue'
</script>

# Button

Use Button component for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples

### Variant

<!--@include: ./demo/button/button-variant.md-->

### Color

<!--@include: ./demo/button/button-color.md-->

### Shape

<!--@include: ./demo/button/button-shape.md-->

### Size

<!--@include: ./demo/button/button-size.md-->

### Disabled

<!--@include: ./demo/button/button-disabled.md-->

### Block

<!--@include: ./demo/button/button-block.md-->

### Loading

<!--@include: ./demo/button/button-loading.md-->

### With Icon

<!--@include: ./demo/button/button-icon.md-->

## Button API

### Props

| Name      | Type                                                      | Default   | Description                                  |
| --------- | --------------------------------------------------------- | --------- | -------------------------------------------- |
| variant   | `fill` `outline` `light` `text`                           | `fill`    | Button variant.                              |
| color     | `primary` `secondary` `info` `success` `warning` `danger` | `primary` | Button color.                                |
| shape     | `sharp` `round` `pill`                                    | `round`   | Button shape.                                |
| size      | `xs` `sm` `md` `lg` `xl` `2xl`                            | `md`      | Button size.                                 |
| isBlock   | boolean                                                   | false     | Block button with full width.                |
| isLoading | boolean                                                   | false     | Add spinner loading indicator inside button. |

### Slot

`#default` slot for rendering button content
