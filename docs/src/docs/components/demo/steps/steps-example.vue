<script setup lang="ts">
import { BaseStep, type BaseStepItemInterface } from '@point-hub/papp'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Step 1',
    active: true
  },
  {
    label: 'Step 2',
    active: false
  },
  {
    label: 'Step 3',
    active: false
  }
])

const onChoosen = (item: BaseStepItemInterface) => {
  console.log(item)
}
</script>

<template>
  <Demo>
    <component :is="BaseStep" v-model="items" @choosen="onChoosen"></component>
  </Demo>
</template>
