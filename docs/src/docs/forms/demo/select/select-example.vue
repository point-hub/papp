<script setup lang="ts">
import { BaseSelect } from '@point-hub/papp'
import { ref } from 'vue'

const options = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]
const form = ref({
  selected: null
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseSelect" v-model="form.selected" :options="options" />
    </form>
  </Demo>
</template>
