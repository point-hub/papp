::: raw

<ClientOnly>
  <DatepickerLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  date1: '',
  date2: ''
})
</script>

<template>
  <form @submit.prevent="">
    <base-datepicker
      v-model="form.date1"
      label="Date"
      layout="vertical"
      description="Vertical Layout"
    />
    <base-datepicker
      v-model="form.date2"
      label="Date"
      layout="horizontal"
      description="Horizontal Layout"
    />
  </form>
</template>
```

:::
