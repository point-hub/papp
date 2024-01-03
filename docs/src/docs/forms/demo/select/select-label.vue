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
  selected1: null,
  selected2: null
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseSelect"
        v-model="form.selected1"
        :options="options"
        label="Label"
        layout="vertical"
        description="Vertical Layout"
      />
      <component
        :is="BaseSelect"
        v-model="form.selected2"
        :options="options"
        label="Label"
        layout="horizontal"
        description="Horizontal Layout"
      />
    </form>
  </Demo>
</template>
