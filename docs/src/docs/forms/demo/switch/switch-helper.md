::: raw

<SwitchHelper />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseSwitch } from '@point-hub/papp'

const form = ref({
  checked1: false,
  checked2: false,
  checked3: false,
  checked4: false,
  checked5: false
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseSwitch"
      v-model="form.checked1"
      label="Label"
      layout="horizontal"
      required
    />
    <component
      :is="BaseSwitch"
      v-model="form.checked2"
      label="Label"
      layout="horizontal"
      description="Description example"
    />
    <component
      :is="BaseSwitch"
      v-model="form.checked3"
      label="Label"
      layout="horizontal"
      :helpers="['Description example']"
    />
    <component
      :is="BaseSwitch"
      v-model="form.checked4"
      label="Label"
      layout="horizontal"
      :errors="['Error example']"
    />
    <component
      :is="BaseSwitch"
      v-model="form.checked5"
      label="Label"
      layout="horizontal"
      description="Disabled"
      disabled
    />
  </form>
</template>
```

:::
