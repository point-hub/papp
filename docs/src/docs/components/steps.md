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

### Types

```ts
export interface BaseStepItemInterface {
  label: string
  active: boolean
  icon?: string
  [key: string]: any
}
```

### Props

| Name      | Type                    | Default | Description                    |
| --------- | ----------------------- | ------- | ------------------------------ |
| v-model   | BaseStepItemInterface[] |         | v-model is `required`.         |
| showLabel | boolean                 | true    | if `true` item label is shown. |

### Event

`@choosen(item: BaseStepItemInterface)` Event for clicked step.
