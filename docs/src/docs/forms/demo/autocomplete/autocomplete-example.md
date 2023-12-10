::: raw

<AutocompleteExample />

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

const options = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]

const selected = ref<OptionInterface>()

const form = ref({
  name: ''
})

const onSubmit = () => {
  form.value.name = selected.value?.label ?? ''
}
</script>

<template>
  <form @submit.prevent="onSubmit()">
    <component :is="BaseAutocomplete" v-model="selected" :options="options" />
  </form>
</template>
```

:::
