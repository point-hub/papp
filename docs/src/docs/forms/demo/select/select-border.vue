<script setup lang="ts">
import { type BaseSelectOptionInterface } from '@point-hub/papp'
import { ref } from 'vue'

interface OptionInterface extends BaseSelectOptionInterface {
  id: number
  label: string
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

const form = ref<{
  name1: string | null
  name2: string | null
  name3: string | null
}>({
  name1: null,
  name2: null,
  name3: null
})

const onSubmit = () => {
  form.value.name1 = selected1.value?.label ?? null
  form.value.name2 = selected2.value?.label ?? null
  form.value.name3 = selected3.value?.label ?? null
}
</script>

<template>
  <Demo>
    <form @submit.prevent="onSubmit()">
      <base-select
        v-model="selected1"
        :options="options"
        label="Label"
        description="Without Border"
        border="none"
      />
      <base-select
        v-model="selected1"
        :options="options"
        label="Label"
        description="Border Simple"
        border="simple"
      />
      <base-select
        v-model="selected1"
        :options="options"
        label="Label"
        description="Border Full"
        border="full"
      />
    </form>
  </Demo>
</template>
