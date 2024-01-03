<script setup lang="ts">
import { BaseRadio } from '@point-hub/papp'
import { ref } from 'vue'

const options = [
  {
    label: 'Label 1',
    value: 'Value 1'
  },
  {
    label: 'Label 2',
    value: 'Value 2'
  },
  {
    label: 'Label 3',
    value: 'Value 3'
  }
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
        :is="BaseRadio"
        :options="options"
        v-model="form.selected1"
        label="Label"
        description="Vertical Layout"
        layout="vertical"
      />
      <component
        :is="BaseRadio"
        :options="options"
        v-model="form.selected2"
        label="Label"
        description="Horizontal Layout"
        layout="horizontal"
      />
    </form>
  </Demo>
</template>
