<script setup lang="ts">
import { ref } from 'vue'
import { BaseSelect } from '@point-hub/papp'

const options = [
  { id: 1, label: 'Durward Reynolds' },
  { id: 2, label: 'Kenton Towne' },
  { id: 3, label: 'Therese Wunsch' },
  { id: 4, label: 'Benedict Kessler' }
]
const form = ref({
  selected1: null,
  selected2: null,
  selected3: null
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
        description="Without Border"
        border="none"
      />
      <component
        :is="BaseSelect"
        v-model="form.selected2"
        :options="options"
        label="Label"
        description="Simple Border"
        border="simple"
      />
      <component
        :is="BaseSelect"
        v-model="form.selected3"
        :options="options"
        label="Label"
        description="Full Border"
        border="full"
      />
    </form>
  </Demo>
</template>
