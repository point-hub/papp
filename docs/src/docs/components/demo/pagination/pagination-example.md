::: raw

<ClientOnly>
  <PaginationExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BasePagination } from '@point-hub/papp'

const page = ref(1)
const pageSize = ref(10)
const totalDocument = ref(100)

const updateData = () => {}
</script>

<template>
  <component
    :is="BasePagination"
    v-model="page"
    :page-size="pageSize"
    :totalDocument="totalDocument"
    @update:model-value="updateData()"
  />
</template>
```

:::
