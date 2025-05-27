<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  text: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-textarea v-model="form.text" />
    </form>
  </Demo>
</template>
