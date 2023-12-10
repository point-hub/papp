::: raw

<AutocompleteLabel />

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseAutocomplete } from '@point-hub/papp'

interface OptionInterface {
  label: string
  [key: string]: any
}

const options: OptionInterface[] = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]

const selected1 = ref<OptionInterface>()
const selected2 = ref<OptionInterface>()

const form = ref({
  name1: '',
  name2: ''
})

const onSubmit = () => {
  form.value.name1 = selected1.value?.label ?? ''
  form.value.name2 = selected2.value?.label ?? ''
}
</script>

<template>
  <form @submit.prevent="onSubmit()">
    <component
      :is="BaseAutocomplete"
      v-model="form.name1"
      :options="options"
      label="Label"
      description="Vertical Layout"
      layout="vertical"
    />
    <component
      :is="BaseAutocomplete"
      v-model="form.name2"
      :options="options"
      label="Label"
      description="Horizontal Layout"
      layout="horizontal"
    />
  </form>
</template>
```

:::
