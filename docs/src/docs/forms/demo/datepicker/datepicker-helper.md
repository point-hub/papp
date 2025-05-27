::: raw

<ClientOnly>
  <DatepickerHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  date: ''
})

const errors = ref(['Error Example'])
</script>

<template>
  <form @submit.prevent="">
    <base-datepicker v-model="form.date" label="Date" required />
    <base-datepicker v-model="form.date" label="Date" description="Description Example" />
    <base-datepicker v-model="form.date" label="Date" :helpers="['Helper Example']" />
    <base-datepicker v-model="form.date" label="Date" v-model:errors="errors" />
    <base-datepicker v-model="form.date" label="Date" description="Disabled" disabled />
  </form>
</template>
```

:::
