<script setup lang="ts">
import { ref } from 'vue'
import { BaseRange } from '@point-hub/papp'

const form = ref({
  volume: 50
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseRange" v-model="form.volume" label="Volume" showText />
    </form>
  </Demo>
</template>
