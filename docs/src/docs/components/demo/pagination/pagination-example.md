::: raw

<ClientOnly>
  <PaginationExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { BasePagination } from '@point-hub/papp'
import { ref } from 'vue'

const pagination = ref({
  page: 1,
  page_size: 5,
  total_document: 100
})

const updateData = () => {}
</script>

<template>
  <Demo>
    <component
      :is="BasePagination"
      v-model="pagination.page"
      :page-size="pagination.page_size"
      :totalDocument="pagination.total_document"
      @update:model-value="updateData()"
    />
  </Demo>
</template>
```

:::
