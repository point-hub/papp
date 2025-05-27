::: raw

<ClientOnly>
  <InputMaskHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  number1: null,
  number2: null,
  number3: null,
  number4: null,
  number5: 10000
})

const errors = ref(['Error example'])
</script>

<template>
  <form @submit.prevent="">
    <base-input-mask
      v-model="form.number1"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Label"
      required
    />
    <base-input-mask
      v-model="form.number2"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Label"
      description="Description example"
    />
    <base-input-mask
      v-model="form.number2"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Label"
      placeholder="1,234,567"
      description="Placeholder"
    />
    <base-input-mask
      v-model="form.number3"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Label"
      :helpers="['Helper example']"
    />
    <base-input-mask
      v-model="form.number4"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Label"
      v-model:errors="errors"
    />
    <base-input-mask
      v-model="form.number5"
      :options="{ numeral: true, numeralThousandsGroupStyle: 'thousand' }"
      label="Label"
      description="Disabled"
      disabled
    />
  </form>
</template>
```

:::
