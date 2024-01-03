<script setup lang="ts">
import { BaseTextarea } from '@point-hub/papp'
import { ref } from 'vue'

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
