The Progress component displays a colored loading bar.

::: raw

<ClientOnly>
  <ProgressColor />
</ClientOnly>

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
    <component :is="BaseProgress" v-model="value1" color="primary" />
    <component :is="BaseProgress" v-model="value2" color="secondary" />
    <component :is="BaseProgress" v-model="value3" color="info" />
    <component :is="BaseProgress" v-model="value4" color="success" />
    <component :is="BaseProgress" v-model="value5" color="warning" />
    <component :is="BaseProgress" v-model="value6" color="danger" />
  </div>
</template>
```

:::
