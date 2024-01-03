<script setup lang="ts">
import { BaseInputNumber } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  number: null
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseInputNumber" v-model="form.number" />
    </form>
  </Demo>
</template>
