You can use indeterminate mode for the progress bar when you do not know how long an operation will take.

::: raw

<ProgressIndeterminate />

:::

::: details Code

```vue
<script setup lang="ts">
import { BaseProgress } from '@point-hub/papp'
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
    <component :is="BaseProgress" v-model="value1" is-indeterminate color="primary" />
    <component :is="BaseProgress" v-model="value2" is-indeterminate color="secondary" />
    <component :is="BaseProgress" v-model="value3" is-indeterminate color="info" />
    <component :is="BaseProgress" v-model="value4" is-indeterminate color="success" />
    <component :is="BaseProgress" v-model="value5" is-indeterminate color="warning" />
    <component :is="BaseProgress" v-model="value6" is-indeterminate color="danger" />
  </div>
</template>
```

:::
