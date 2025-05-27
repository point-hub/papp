<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checked1: false,
  checked2: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-switch v-model="form.checked1" text="Label" />
      <base-switch v-model="form.checked2" text="Label" text-position="right" />
    </form>
  </Demo>
</template>
