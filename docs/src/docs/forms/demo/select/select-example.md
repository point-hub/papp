::: raw

<SelectExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseSelect } from '@point-hub/papp'

const options = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]
const form = ref({
  selected: {}
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseSelect" v-model="form.selected" :options="options" />
  </form>
</template>
```

:::
