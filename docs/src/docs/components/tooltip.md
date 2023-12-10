---
outline: deep
---

<script setup lang="ts">
import TooltipDirective from './demo/tooltip/tooltip-directive.vue'
import TooltipComponent from './demo/tooltip/tooltip-component.vue'
import TooltipGlobal from './demo/tooltip/tooltip-global.vue'
</script>

# Tooltip

The tooltip component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component

## Examples

### Directive

<!--@include: ./demo/tooltip/tooltip-directive.md-->

### Component

<!--@include: ./demo/tooltip/tooltip-component.md-->

### Global

<!--@include: ./demo/tooltip/tooltip-global.md-->

## Tooltip API

### Props

| Name        | Type    | Default | Description                                                                                                                       |
| ----------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| content     | string  |         | Tooltip content.                                                                                                                  |
| interactive | boolean | true    | Determines if the tooltip has interactive content inside of it, so that it can be hovered over and clicked inside without hiding. |
| zIndex      | number  | 9999    | Specifies the z-index CSS on the root popper node.                                                                                |

### Slot

`#default` slot for rendering tooltip trigger element

`#content` slot for rendering tooltip content
