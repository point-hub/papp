::: raw

<InputMaskExample />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputMask } from '@point-hub/papp'

const form = ref({
  date: '',
  number: 0,
  creditCard: ''
})
</script>

<template>
  <form @submit.prevent="">
    <component
      :is="BaseInputMask"
      v-model="form.number"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Numeral"
      placeholder="1,234,567"
    ></component>
    <component
      :is="BaseInputMask"
      v-model="form.date"
      :options="{ date: true, delimiter: '-', datePattern: ['d', 'm', 'Y'] }"
      label="Date"
      placeholder="DD-MM-YYYY"
    ></component>
    <component
      :is="BaseInputMask"
      v-model="form.creditCard"
      :options="{ creditCard: true }"
      label="Credit Card"
      placeholder="**** **** **** ****"
    ></component>
  </form>
</template>
```

:::
