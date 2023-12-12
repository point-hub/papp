---
outline: deep
---

<script setup lang="ts">
import SwitchExample from './demo/switch/switch-example.vue'
import SwitchText from './demo/switch/switch-text.vue'
import SwitchLabel from './demo/switch/switch-label.vue'
import SwitchHelper from './demo/switch/switch-helper.vue'
import SwitchSize from './demo/switch/switch-size.vue'
import SwitchDisabled from './demo/switch/switch-disabled.vue'
</script>

# Switch

The Switch component is used as an alternative for the checkbox. The option that the switch controls, as well as the state it's in, should be made clear from the corresponding inline label.

## Examples

### Switch

<!--@include: ./demo/switch/switch-example.md-->

### Text

<!--@include: ./demo/switch/switch-text.md-->

### Label

<!--@include: ./demo/switch/switch-label.md-->

### Size

<!--@include: ./demo/switch/switch-size.md-->

### Helper

<!--@include: ./demo/switch/switch-helper.md-->

### Disabled

<!--@include: ./demo/switch/switch-disabled.md-->

## Switch API

### Types

```ts
export type BaseSwitchTextPosition = 'left' | 'right'
export type BaseSwitchSize = 'sm' | 'md' | 'lg' | 'xl'
```

### Props

| Name          | Type                   | Default | Description                   |
| ------------- | ---------------------- | ------- | ----------------------------- |
| v-model       | boolean                |         | v-model is `required`.        |
| label         | string                 |         | Switch label.                 |
| text          | string                 |         | Switch text.                  |
| text-position | BaseSwitchTextPosition | `left`  | Switch text position.         |
| size          | BaseSwitchSize         | `md`    | Switch size.                  |
| disabled      | boolean                | false   | if true switch is `disabled`. |
