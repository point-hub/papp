::: raw

<SwitchLabel />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseSwitch } from '@point-hub/papp'

const form = ref({
  checked1: false,
  checked2: false
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseSwitch"
      v-model="form.checked1"
      label="Label"
      layout="vertical"
      description="Vertical Layout"
    />
    <component
      :is="BaseSwitch"
      v-model="form.checked2"
      label="Label"
      layout="horizontal"
      description="Horizontal Layout"
    />
  </form>
</template>
```

:::
