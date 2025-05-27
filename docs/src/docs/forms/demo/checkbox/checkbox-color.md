::: raw

<ClientOnly>
  <CheckboxColor />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const primaryCheckbox = ref(false)
const secondaryCheckbox = ref(false)
const infoCheckbox = ref(false)
const successCheckbox = ref(false)
const warningCheckbox = ref(false)
const dangerCheckbox = ref(false)
</script>

<template>
  <base-checkbox v-model="primaryCheckbox" theme="primary" />
  <base-checkbox v-model="secondaryCheckbox" theme="secondary" />
  <base-checkbox v-model="infoCheckbox" theme="info" />
  <base-checkbox v-model="successCheckbox" theme="success" />
  <base-checkbox v-model="warningCheckbox" theme="warning" />
  <base-checkbox v-model="dangerCheckbox" theme="danger" />
</template>
```

:::
