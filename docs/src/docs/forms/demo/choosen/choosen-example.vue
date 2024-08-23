<script setup lang="ts">
import { BaseChoosen } from '@point-hub/papp'
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
    <base-choosen title="Example" :options="options" v-model:selected="selected" mode="text" />
  </Demo>
</template>
