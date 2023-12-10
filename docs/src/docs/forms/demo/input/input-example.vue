<script setup lang="ts">
import { ref } from 'vue'
import { BaseInput } from '@point-hub/papp'

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
