<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(50)
const value2 = ref(60)
const value3 = ref(70)
const value4 = ref(80)
const value5 = ref(90)
const value6 = ref(100)
</script>

<template>
  <Demo>
    <base-progress v-model="value1" color="primary" />
    <base-progress v-model="value2" color="secondary" />
    <base-progress v-model="value3" color="info" />
    <base-progress v-model="value4" color="success" />
    <base-progress v-model="value5" color="warning" />
    <base-progress v-model="value6" color="danger" />
  </Demo>
</template>
