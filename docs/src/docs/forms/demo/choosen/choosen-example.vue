<script setup lang="ts">
import { ref } from 'vue'
const options = ref([
  {
    _id: '1',
    label: 'Jane',
    value: 'jane'
  },
  {
    _id: '2',
    label: 'John Doe',
    value: 'john-doe'
  }
])

const selected = ref()
const selectedLabel = ref('')
const selectedValue = ref('')
</script>

<template>
  <Demo is-row>
    <base-choosen title="Example" :options="options" v-model:selected="selected" v-model:selectedLabel="selectedLabel" v-model:selectedValue="selectedValue" />
    <div class="flex flex-col gap-4">
      <div><span class="font-bold">v-model = </span><span>{{ selected }}</span></div>
      <div><span class="font-bold">v-model:selectedLabel = </span><span>{{ selectedLabel }}</span></div>
      <div><span class="font-bold">v-model:selectedValue = </span><span>{{ selectedValue }}</span></div>
    </div>
  </Demo>
</template>
