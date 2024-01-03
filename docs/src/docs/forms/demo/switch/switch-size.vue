<script setup lang="ts">
import { BaseSwitch } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  checked1: false,
  checked2: false,
  checked3: false,
  checked4: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseSwitch" v-model="form.checked1" label="sm" size="sm" />
      <component :is="BaseSwitch" v-model="form.checked2" label="md" size="md" />
      <component :is="BaseSwitch" v-model="form.checked3" label="lg" size="lg" />
      <component :is="BaseSwitch" v-model="form.checked4" label="xl" size="xl" />
    </form>
  </Demo>
</template>
