<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  checked1: false,
  checked2: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <base-switch
        v-model="form.checked1"
        label="Label"
        layout="vertical"
        description="Vertical Layout"
      />
      <base-switch
        v-model="form.checked2"
        label="Label"
        layout="horizontal"
        description="Horizontal Layout"
      />
    </form>
  </Demo>
</template>
