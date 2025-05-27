<script setup lang="ts">
import { ref } from 'vue'

const checkbox1 = ref(false)
const checkbox2 = ref(false)
</script>

<template>
  <Demo>
    <base-checkbox
      v-model="checkbox1"
      text="Checkbox"
      label="Label"
      layout="vertical"
      description="Vertical Layout"
    />
    <base-checkbox
      v-model="checkbox2"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      description="Hertical Layout"
    />
  </Demo>
</template>
