::: raw

<ClientOnly>
  <DatepickerExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseDatepicker } from '@point-hub/papp'

const form = ref({
  date: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseDatepicker" v-model="form.date" />
  </form>
</template>
```

:::
