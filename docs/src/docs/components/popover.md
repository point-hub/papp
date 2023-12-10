---
outline: deep
---

<script setup lang="ts">
import PopoverExample from './demo/popover/popover-example.vue'
</script>

# Popover

The Popover component is similar to tooltips; it is a pop-up box that appears when the user clicks on an element.

## Examples

<!--@include: ./demo/popover/popover-example.md-->

## Popover API

### Props

| Name      | Type                                                                                                                                                      | Default  | Description       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------- |
| placement | `auto-start` `auto-end` `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `right` `right-start` `right-end` `left` `left-start` `left-end` | `bottom` | Popover placement |

### Slot

`#default` slot for rendering popover trigger element

`#content` slot for rendering popover content
