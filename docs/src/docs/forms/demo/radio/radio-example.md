::: raw

<ClientOnly>
  <RadioExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  {
    label: 'Label 1',
    value: 'Value 1'
  },
  {
    label: 'Label 2',
    value: 'Value 2'
  },
  {
    label: 'Label 3',
    value: 'Value 3'
  }
]

const selected = ref()
</script>

<template>
  <form @submit.prevent="">
    <base-radio name="radio-option" :options="options" v-model="selected" />
  </form>
</template>
```

:::
