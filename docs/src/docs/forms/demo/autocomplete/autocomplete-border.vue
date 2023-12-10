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

const form = ref({
  name1: '',
  name2: '',
  name3: ''
})

const onSubmit = () => {
  form.value.name1 = selected1.value?.label ?? ''
  form.value.name2 = selected2.value?.label ?? ''
  form.value.name3 = selected3.value?.label ?? ''
}
</script>

<template>
  <Demo>
    <form @submit.prevent="onSubmit()">
      <component
        :is="BaseAutocomplete"
        v-model="selected1"
        :options="options"
        label="Label"
        description="Without Border"
        border="none"
      />
      <component
        :is="BaseAutocomplete"
        v-model="selected1"
        :options="options"
        label="Label"
        description="Border Simple"
        border="simple"
      />
      <component
        :is="BaseAutocomplete"
        v-model="selected1"
        :options="options"
        label="Label"
        description="Border Full"
        border="full"
      />
    </form>
  </Demo>
</template>
