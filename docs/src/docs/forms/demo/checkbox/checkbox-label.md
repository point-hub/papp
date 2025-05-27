::: raw

<ClientOnly>
  <CheckboxLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const checkbox1 = ref(false)
const checkbox2 = ref(false)
</script>

<template>
  <base-checkbox
    v-model="checkbox1"
    text="Checkbox"
    label="Label"
    layout="vertical"
    description="Vertical Layout"
  />
  <base-checkbox
    v-model="checkbox2"
    text="Checkbox"
    label="Label"
    layout="horizontal"
    description="Hertical Layout"
  />
</template>
```

:::
