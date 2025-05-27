::: raw

<ClientOnly>
  <InputHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name1: '',
  name2: '',
  name3: '',
  name4: '',
  name5: '',
  name6: 'Disabled'
})

const errors = ref(['Error Example'])
</script>

<template>
  <form @submit.prevent="">
    <base-input v-model="form.name1" label="Label" required />
    <base-input v-model="form.name2" label="Label" placeholder="Placeholder example" />
    <base-input v-model="form.name3" label="Label" description="Description example" />
    <base-input v-model="form.name4" label="Label" :helpers="['Helper example']" />
    <base-input v-model="form.name5" label="Label" v-model:errors="errors" />
    <base-input v-model="form.name6" label="Label" description="Disabled" disabled />
  </form>
</template>
```

:::
