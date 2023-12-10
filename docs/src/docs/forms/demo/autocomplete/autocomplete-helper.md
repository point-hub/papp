::: raw

<AutocompleteHelper />

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
const selected3 = ref<OptionInterface>()
const selected4 = ref<OptionInterface>()
const selected5 = ref<OptionInterface>(options[1])

const form = ref({
  name1: '',
  name2: '',
  name3: '',
  name4: '',
  name5: ''
})

const onSubmit = () => {
  form.value.name1 = selected1.value?.label ?? ''
  form.value.name2 = selected2.value?.label ?? ''
  form.value.name3 = selected3.value?.label ?? ''
  form.value.name4 = selected4.value?.label ?? ''
  form.value.name5 = selected5.value?.label ?? ''
}
</script>

<template>
  <form @submit.prevent="onSubmit()">
    <component
      :is="BaseAutocomplete"
      v-model="selected1"
      :options="options"
      label="Label"
      required
    />
    <component
      :is="BaseAutocomplete"
      v-model="selected2"
      :options="options"
      label="Label"
      description="Description Example"
    />
    <component
      :is="BaseAutocomplete"
      v-model="selected3"
      :options="options"
      label="Label"
      :helpers="['Helper Example']"
    />
    <component
      :is="BaseAutocomplete"
      v-model="selected4"
      :options="options"
      label="Label"
      :errors="['Error 1 Example', 'Error 2 Example', 'Error 3 Example']"
    />
    <component
      :is="BaseAutocomplete"
      v-model="selected5"
      :options="options"
      label="Label"
      disabled
    />
  </form>
</template>
```

:::
