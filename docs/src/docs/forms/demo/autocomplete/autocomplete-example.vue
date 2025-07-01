<script setup lang="ts">
import { ref } from 'vue'

interface OptionInterface {
  id: number
  label: string
  value: string
}

const options: OptionInterface[] = ref([
  { id: 1, label: 'Durward Reynolds', value: 'durward-reynolds' },
  { id: 2, label: 'Kenton Towne', value: 'kenton-towne' },
  { id: 3, label: 'Therese Wunsch', value: 'therese-wunsch' },
  { id: 4, label: 'Benedict Kessler', value: 'benedict-kessler' }
])

const selected = ref()
const search = ref('')
const selectedLabel = ref('')
const selectedValue = ref('')
</script>

<template>
  <Demo>
    <form @submit.prevent="onSubmit()">
      <base-autocomplete v-model="selected" v-model:search="search" :options="options" v-model:selectedLabel="selectedLabel" v-model:selectedValue="selectedValue" />
      <div class="flex flex-col gap-4">
        <div><span class="font-bold">v-model = </span><span>{{ selected }}</span></div>
        <div><span class="font-bold">v-model:selectedLabel = </span><span>{{ selectedLabel }}</span></div>
        <div><span class="font-bold">v-model:selectedValue = </span><span>{{ selectedValue }}</span></div>
      </div>
    </form>
  </Demo>
</template>
