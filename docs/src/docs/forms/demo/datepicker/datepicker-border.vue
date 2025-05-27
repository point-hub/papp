<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  date: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-datepicker v-model="form.date" label="Without Border" border="none" />
      <base-datepicker v-model="form.date" label="Simple Border" border="simple" />
      <base-datepicker v-model="form.date" label="Full Border" border="full" />
    </form>
  </Demo>
</template>
