---
outline: deep
---

<script setup lang="ts">
import AccordionExample from './demo/accordion/accordion-example.vue'
import AccordionAlwaysOpen from './demo/accordion/accordion-always-open.vue'
import AccordionSlot from './demo/accordion/accordion-slot.vue'
</script>

# Accordion

Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options

## Examples

### Accordion

<!--@include: ./demo/accordion/accordion-example.md-->

### Always Open

<!--@include: ./demo/accordion/accordion-always-open.md-->

### Using Slot

<!--@include: ./demo/accordion/accordion-slot.md-->

## Accordion API

### Props

| Name       | Type    | Default | Description                                             |
| ---------- | ------- | ------- | ------------------------------------------------------- |
| alwaysOpen | boolean | false   | Disable behavior automatic close another accordion item |

### Slot

`#default` slot for rendering accordion item

## Accordion Item API

### Props

| Name    | Type   | Default | Description                                                                                                                    |
| ------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| item-id | string |         | Accordion item identifier is `required` and should be `unique`. It used for calculate height each item and manage active state |
| title   | string |         | Accordion item title.                                                                                                          |
| content | string |         | Accordion item content.                                                                                                        |

### Slot

`#default` slot for rendering accordion item content

`#title` slot for rendering accordion item title
