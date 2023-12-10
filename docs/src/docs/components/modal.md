---
outline: deep
---

<script setup lang="ts">
import ModalExample from './demo/modal/modal-example.vue'
import ModalSize from './demo/modal/modal-size.vue'
</script>

# Modal

The modal component can be used as an interactive dialog on top of the main content area of the website to show notifications and gather information using form elements from your website users.

## Examples

### Modal

<!--@include: ./demo/modal/modal-example.md-->

### Size

<!--@include: ./demo/modal/modal-size.md-->

## Modal API

### Props

| Name   | Type                                        | Default | Description                                                  |
| ------ | ------------------------------------------- | ------- | ------------------------------------------------------------ |
| isOpen | boolean                                     |         | Modal open state is `required` to trigger open modal dialog. |
| size   | `sm` `md` `lg` `xl` `2xl` `full` `maximize` | `md`    | Modal container size.                                        |

### Slot

`#default` slot for rendering modal content

### Event

`onClose` event for closed modal
