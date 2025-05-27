<script setup lang="ts">
import { ref } from 'vue'
const options = ref([
  {
    _id: '1',
    label: 'Jane'
  },
  {
    _id: '2',
    label: 'John Doe'
  }
])

const selected = ref()
</script>

<template>
  <Demo is-row>
    <base-choosen title="Example" :options="options" v-model:selected="selected" />
  </Demo>
</template>
