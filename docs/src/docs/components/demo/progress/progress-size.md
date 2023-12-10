The Progress components can have various sizes.

::: raw

<ClientOnly>
  <ProgressSize />
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
  <Demo>
    <component :is="BaseProgress" v-model="value1" size="xs" />
    <component :is="BaseProgress" v-model="value2" size="sm" />
    <component :is="BaseProgress" v-model="value3" size="md" />
    <component :is="BaseProgress" v-model="value4" size="lg" />
    <component :is="BaseProgress" v-model="value5" size="xl" />
    <component :is="BaseProgress" v-model="value6" size="2xl" />
  </Demo>
</template>
```

:::
