<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checked: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-switch v-model="form.checked" />
    </form>
  </Demo>
</template>
