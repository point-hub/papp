::: raw

<ClientOnly>
  <SelectHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const options = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]

const form = ref({
  selected1: null,
  selected2: null,
  selected3: null,
  selected4: null,
  selected5: options[1]
})

const errors = ref(['Error Example'])
</script>

<template>
  <form @submit.prevent="">
    <base-select v-model="form.selected1" :options="options" label="Label" required />
    <base-select
      v-model="form.selected2"
      :options="options"
      label="Label"
      description="Description example"
    />
    <base-select
      v-model="form.selected3"
      :options="options"
      label="Label"
      :helpers="['Helper example']"
    />
    <base-select
      v-model="form.selected4"
      :options="options"
      label="Label"
      v-model:errors="errors"
    />
    <base-select v-model="form.selected5" :options="options" label="Label" disabled />
  </form>
</template>
```

:::
