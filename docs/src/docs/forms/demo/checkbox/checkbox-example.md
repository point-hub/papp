::: raw

<ClientOnly>
  <CheckboxExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checkbox: false
})
</script>

<template>
  <base-checkbox v-model="form.checkbox" text="Checkbox" />
</template>
```

:::
