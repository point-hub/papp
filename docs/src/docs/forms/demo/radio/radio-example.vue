<script setup lang="ts">
import { ref } from 'vue'
import { BaseRadio } from '@point-hub/papp'

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

const selected = ref()
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseRadio" name="radio-option" :options="options" v-model="selected" />
    </form>
  </Demo>
</template>
