::: raw

<ClientOnly>
  <InputMaskExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  date: '',
  number: 0,
  creditCard: ''
})
</script>

<template>
  <form @submit.prevent="">
    <base-input-mask
      v-model="form.number"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Numeral"
      placeholder="1,234,567"
    />
    <base-input-mask
      v-model="form.date"
      :options="{ date: true, delimiter: '-', datePattern: ['d', 'm', 'Y'] }"
      label="Date"
      placeholder="DD-MM-YYYY"
    />
    <base-input-mask
      v-model="form.creditCard"
      :options="{ creditCard: true }"
      label="Credit Card"
      placeholder="**** **** **** ****"
    />
  </form>
</template>
```

:::
