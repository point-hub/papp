<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  date: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-datepicker v-model="form.date" />
    </form>
  </Demo>
</template>
