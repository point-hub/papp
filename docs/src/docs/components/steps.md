---
outline: deep
---

<script setup lang="ts">
import StepsExample from './demo/steps/steps-example.vue'
import StepsIcon from './demo/steps/steps-icon.vue'
</script>

# Steps

Lead the user through a series of tasks in a specific order.

## Examples

### Steps

<!--@include: ./demo/steps/steps-example.md-->

### Icon

<!--@include: ./demo/steps/steps-icon.md-->

## Steps API

### Props

| Name   | Type    | Default | Description                    |
| ------ | ------- | ------- | ------------------------------ |
| label  | boolean |         | Step item label is `required`. |
| active | boolean | false   | Step item active.              |
| icon   | boolean |         | Step item icon.                |
