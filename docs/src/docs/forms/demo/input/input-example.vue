<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-input v-model="form.name" />
    </form>
  </Demo>
</template>
