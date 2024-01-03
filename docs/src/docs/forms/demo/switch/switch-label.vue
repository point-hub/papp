<script setup lang="ts">
import { BaseSwitch } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  checked1: false,
  checked2: false
})
</script>

<template>
  <Demo>
    <form @submit.prevent="">
      <component
        :is="BaseSwitch"
        v-model="form.checked1"
        label="Label"
        layout="vertical"
        description="Vertical Layout"
      />
      <component
        :is="BaseSwitch"
        v-model="form.checked2"
        label="Label"
        layout="horizontal"
        description="Horizontal Layout"
      />
    </form>
  </Demo>
</template>
