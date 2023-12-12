<script setup lang="ts">
import { ref } from 'vue'
import { BaseInputNumber } from '@point-hub/papp'

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
