<script setup lang="ts">
import { BaseInput } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  name: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseInput" v-model="form.name" />
    </form>
  </Demo>
</template>
