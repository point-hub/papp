::: raw

<ClientOnly>
  <AutocompleteExample />
</ClientOnly>

:::

::: details Code

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { BaseAutocomplete, type BaseAutocompleteOptionInterface } from '@point-hub/papp'

interface OptionInterface extends BaseAutocompleteOptionInterface {
  id: number
  label: string
}

const options: OptionInterface[] = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]

const selected = ref()

const form = ref<{
  name: string | null
}>({
  name: null
})

const onSubmit = () => {
  form.value.name = selected.value?.label ?? null
}
</script>

<template>
  <form @submit.prevent="onSubmit()">
    <component :is="BaseAutocomplete" v-model="selected" :options="options" />
  </form>
</template>
```

:::
