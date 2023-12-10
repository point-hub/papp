---
outline: deep
---

<script setup lang="ts">
import DropdownExample from './demo/dropdown/dropdown-example.vue'
import DropdownTrigger from './demo/dropdown/dropdown-trigger.vue'
import DropdownMenu from './demo/dropdown/dropdown-menu.vue'
</script>

# Dropdown

Use Dropdown component for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

## Examples

### Dropdown

<!--@include: ./demo/dropdown/dropdown-example.md-->

### Custom Trigger

<!--@include: ./demo/dropdown/dropdown-trigger.md-->

### Custom Menu

<!--@include: ./demo/dropdown/dropdown-menu.md-->

## Dropdown API

### Props

| Name     | Type           | Default | Description            |
| -------- | -------------- | ------- | ---------------------- |
| text     | string         | Options | Dropdown button text   |
| position | `left` `right` | `left`  | Dropdown menu position |

### Slot

`#default` slot for rendering dropdown menu items

`#trigger` slot for rendering dropdown trigger button

## Dropdown Item API

### Props

| Name | Type   | Default | Description             |
| ---- | ------ | ------- | ----------------------- |
| text | string |         | Dropdown menu item text |

### Slot

`#default` slot for rendering dropdown content
