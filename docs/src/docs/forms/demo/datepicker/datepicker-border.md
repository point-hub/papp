::: raw

<DatepickerBorder />

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
    <component :is="BaseDatepicker" v-model="form.date" label="Without Border" border="none" />
    <component :is="BaseDatepicker" v-model="form.date" label="Simple Border" border="simple" />
    <component :is="BaseDatepicker" v-model="form.date" label="Full Border" border="full" />
  </form>
</template>
```

:::
