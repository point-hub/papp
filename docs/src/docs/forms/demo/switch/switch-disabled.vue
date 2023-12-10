<script setup lang="ts">
import { ref } from 'vue'
import { BaseSwitch } from '@point-hub/papp'

const form = ref({
  checked1: true,
  checked2: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseSwitch" v-model="form.checked1" disabled />
      <component :is="BaseSwitch" v-model="form.checked2" disabled />
    </form>
  </Demo>
</template>
