::: raw

<ClientOnly>
  <DatepickerLabel />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseDatepicker } from '@point-hub/papp'

const form = ref({
  date1: '',
  date2: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseDatepicker"
      v-model="form.date1"
      label="Date"
      layout="vertical"
      description="Vertical Layout"
    />
    <component
      :is="BaseDatepicker"
      v-model="form.date2"
      label="Date"
      layout="horizontal"
      description="Horizontal Layout"
    />
  </form>
</template>
```

:::
