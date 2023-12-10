::: raw

<ClientOnly>
  <CheckboxLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseCheckbox } from '@point-hub/papp'

const checkbox1 = ref(false)
const checkbox2 = ref(false)
</script>

<template>
  <component
    :is="BaseCheckbox"
    v-model="checkbox1"
    text="Checkbox"
    label="Label"
    layout="vertical"
    description="Vertical Layout"
  />
  <component
    :is="BaseCheckbox"
    v-model="checkbox2"
    text="Checkbox"
    label="Label"
    layout="horizontal"
    description="Hertical Layout"
  />
</template>
```

:::
