<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checkbox: false
})
</script>

<template>
  <Demo is-row>
    <base-checkbox v-model="form.checkbox" text="Checkbox" />
  </Demo>
</template>
