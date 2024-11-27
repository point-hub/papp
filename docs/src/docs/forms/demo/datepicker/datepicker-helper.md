::: raw

<ClientOnly>
  <DatepickerHelper />
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

const errors = ref(['Error Example'])
</script>

<template>
  <form @submit.prevent="">
    <component :is="BaseDatepicker" v-model="form.date" label="Date" required />
    <component
      :is="BaseDatepicker"
      v-model="form.date"
      label="Date"
      description="Description Example"
    />
    <component
      :is="BaseDatepicker"
      v-model="form.date"
      label="Date"
      :helpers="['Helper Example']"
    />
    <component :is="BaseDatepicker" v-model="form.date" label="Date" v-model:errors="errors" />
    <component
      :is="BaseDatepicker"
      v-model="form.date"
      label="Date"
      description="Disabled"
      disabled
    />
  </form>
</template>
```

:::
