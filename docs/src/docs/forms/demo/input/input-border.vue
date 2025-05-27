<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name1: '',
  name2: '',
  name3: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-input v-model="form.name1" label="Without Border" border="none" />
      <base-input v-model="form.name2" label="Simple Border" border="simple" />
      <base-input v-model="form.name3" label="Full Border" border="full" />
    </form>
  </Demo>
</template>
