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
      <component :is="BaseDatepicker" v-model="form.date" label="Without Border" border="none" />
      <component :is="BaseDatepicker" v-model="form.date" label="Simple Border" border="simple" />
      <component :is="BaseDatepicker" v-model="form.date" label="Full Border" border="full" />
    </form>
  </Demo>
</template>
