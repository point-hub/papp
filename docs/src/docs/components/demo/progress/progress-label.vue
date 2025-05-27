<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(20)
const value2 = ref(50)
const value3 = ref(100)
</script>

<template>
  <Demo>
    <base-progress v-model="value1" color="danger" size="lg">
      <p>{{ value1 }}%</p>
    </base-progress>
    <base-progress v-model="value1" color="danger" size="lg">
      <p>{{ value1 }}%</p>
      <p>progress-lg</p>
    </base-progress>
    <base-progress v-model="value2" color="warning" size="xl">
      <p>{{ value2 }}%</p>
    </base-progress>
    <base-progress v-model="value2" color="warning" size="xl">
      <p>{{ value2 }}%</p>
      <p>progress-xl</p>
    </base-progress>
    <base-progress v-model="value3" color="success" size="2xl">
      <p>{{ value3 }}%</p>
    </base-progress>
    <base-progress v-model="value3" color="success" size="2xl">
      <p>{{ value3 }}%</p>
      <p>progress-2xl</p>
    </base-progress>
  </Demo>
</template>
