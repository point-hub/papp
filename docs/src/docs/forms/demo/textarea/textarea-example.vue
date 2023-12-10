<script setup lang="ts">
import { ref } from 'vue'
import { BaseTextarea } from '@point-hub/papp'

const form = ref({
  text: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component :is="BaseTextarea" v-model="form.text" />
    </form>
  </Demo>
</template>
