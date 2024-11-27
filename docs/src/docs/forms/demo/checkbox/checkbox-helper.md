::: raw

<ClientOnly>
  <CheckboxHelper />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseCheckbox } from '@point-hub/papp'

const checkbox1 = ref(false)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(false)

const errors = ref(['Error example'])
</script>

<template>
  <component
    :is="BaseCheckbox"
    v-model="checkbox1"
    text="Checkbox"
    label="Label"
    layout="horizontal"
    required
  />
  <component
    :is="BaseCheckbox"
    v-model="checkbox2"
    text="Checkbox"
    label="Label"
    layout="horizontal"
    description="Description example"
  />
  <component
    :is="BaseCheckbox"
    v-model="checkbox3"
    text="Checkbox"
    label="Label"
    layout="horizontal"
    :helpers="['Helper example']"
  />
  <component
    :is="BaseCheckbox"
    v-model="checkbox4"
    text="Checkbox"
    label="Label"
    layout="horizontal"
    v-model:errors="errors"
  />
  <component
    :is="BaseCheckbox"
    v-model="checkbox5"
    text="Checkbox"
    label="Label"
    layout="horizontal"
    description="Disabled"
    disabled
  />
</template>
```

:::
