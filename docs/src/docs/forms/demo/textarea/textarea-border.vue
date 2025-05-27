<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  text1: '',
  text2: '',
  text3: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-textarea label="Without Border" v-model="form.text1" border="none" />
      <base-textarea label="Simple Border" v-model="form.text2" border="simple" />
      <base-textarea label="Full Border" v-model="form.text3" border="full" />
    </form>
  </Demo>
</template>
