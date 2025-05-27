You can use indeterminate mode for the progress bar when you do not know how long an operation will take.

::: raw

<ClientOnly>
  <ProgressIndeterminate />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(50)
const value2 = ref(60)
const value3 = ref(70)
const value4 = ref(80)
const value5 = ref(90)
const value6 = ref(100)
</script>

<template>
  <div>
    <base-progress v-model="value1" is-indeterminate color="primary" />
    <base-progress v-model="value2" is-indeterminate color="secondary" />
    <base-progress v-model="value3" is-indeterminate color="info" />
    <base-progress v-model="value4" is-indeterminate color="success" />
    <base-progress v-model="value5" is-indeterminate color="warning" />
    <base-progress v-model="value6" is-indeterminate color="danger" />
  </div>
</template>
```

:::
