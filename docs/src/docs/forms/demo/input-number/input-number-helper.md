::: raw

<ClientOnly>
  <InputNumberHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  number1: 0,
  number2: 0,
  number3: 0,
  number4: 0,
  number5: 0,
  number6: 10000
})

const errors = ref(['Error example'])
</script>

<template>
  <form @submit.prevent="">
    <base-input-number v-model="form.number1" label="Label" required />
    <base-input-number v-model="form.number2" label="Label" placeholder="Placeholder example" />
    <base-input-number v-model="form.number3" label="Label" description="Description example" />
    <base-input-number v-model="form.number4" label="Label" :helpers="['Helper example']" />
    <base-input-number v-model="form.number5" label="Label" v-model:errors="errors" />
    <base-input-number v-model="form.number6" label="Label" disabled />
  </form>
</template>
```

:::
