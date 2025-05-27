::: raw

<ClientOnly>
  <DatepickerExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  date: ''
})
</script>

<template>
  <form @submit.prevent="">
    <base-datepicker v-model="form.date" />
  </form>
</template>
```

:::
