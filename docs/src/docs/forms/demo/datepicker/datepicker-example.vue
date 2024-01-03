<script setup lang="ts">
import { BaseDatepicker } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  date: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseDatepicker" v-model="form.date" />
    </form>
  </Demo>
</template>
