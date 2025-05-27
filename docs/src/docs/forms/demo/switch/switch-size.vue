<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checked1: false,
  checked2: false,
  checked3: false,
  checked4: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-switch v-model="form.checked1" label="sm" size="sm" />
      <base-switch v-model="form.checked2" label="md" size="md" />
      <base-switch v-model="form.checked3" label="lg" size="lg" />
      <base-switch v-model="form.checked4" label="xl" size="xl" />
    </form>
  </Demo>
</template>
