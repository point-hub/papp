<script setup lang="ts">
import { type BaseAutocompleteOptionInterface } from '@point-hub/papp'
import { ref } from 'vue'

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
  <Demo>
    <form @submit.prevent="onSubmit()">
      <base-autocomplete v-model="selected" :options="options" />
    </form>
  </Demo>
</template>
