<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  text1: '',
  text2: ''
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-textarea label="Min Height 128px" v-model="form.text1" border="full" :minHeight="128" />
      <base-textarea label="Max Height 128px" v-model="form.text2" border="full" :maxHeight="128" />
    </form>
  </Demo>
</template>
