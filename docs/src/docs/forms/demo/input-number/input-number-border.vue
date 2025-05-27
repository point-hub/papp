<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  number1: null,
  number2: null,
  number3: null
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-input-number v-model="form.number1" label="Without Border" border="none" />
      <base-input-number v-model="form.number2" label="Simple Border" border="simple" />
      <base-input-number v-model="form.number3" label="Full Border" border="full" />
    </form>
  </Demo>
</template>
