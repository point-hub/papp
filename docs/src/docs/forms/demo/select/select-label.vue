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

const selected1 = ref()
const selected2 = ref()

const form = ref<{
  name1: string | null
  name2: string | null
}>({
  name1: null,
  name2: null
})

const onSubmit = () => {
  form.value.name1 = selected1.value?.label ?? null
  form.value.name2 = selected2.value?.label ?? null
}
</script>

<template>
  <Demo>
    <form @submit.prevent="onSubmit()">
      <base-select
        v-model="selected1"
        :options="options"
        label="Label"
        description="Vertical Layout"
        layout="vertical"
      />
      <base-select
        v-model="selected2"
        :options="options"
        label="Label"
        description="Horizontal Layout"
        layout="horizontal"
      />
    </form>
  </Demo>
</template>
