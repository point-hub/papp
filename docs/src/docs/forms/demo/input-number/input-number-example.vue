<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  number: null
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-input-number v-model="form.number" />
    </form>
  </Demo>
</template>
