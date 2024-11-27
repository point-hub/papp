::: raw

<ClientOnly>
  <AutocompleteHelper />
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

const selected1 = ref()
const selected2 = ref()
const selected3 = ref()
const selected4 = ref()
const selected5 = ref(options[1])

const form = ref<{
  name1: string | null
  name2: string | null
  name3: string | null
  name4: string | null
  name5: string | null
}>({
  name1: null,
  name2: null,
  name3: null,
  name4: null,
  name5: null
})

const onSubmit = () => {
  form.value.name1 = selected1.value?.label ?? null
  form.value.name2 = selected2.value?.label ?? null
  form.value.name3 = selected3.value?.label ?? null
  form.value.name4 = selected4.value?.label ?? null
  form.value.name5 = selected5.value?.label ?? null
}

const errors = ref(['Error 1 Example', 'Error 2 Example', 'Error 3 Example'])
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
      v-model:errors="errors"
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
