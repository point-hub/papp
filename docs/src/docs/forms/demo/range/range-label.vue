<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  volume: 50
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-range v-model="form.volume" layout="vertical" label="Vertical" />
      <base-range v-model="form.volume" layout="horizontal" label="Horizontal" />
    </form>
  </Demo>
</template>
