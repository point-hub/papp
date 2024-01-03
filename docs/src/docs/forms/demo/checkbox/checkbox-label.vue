<script setup lang="ts">
import { BaseCheckbox } from '@point-hub/papp'
import { ref } from 'vue'

const checkbox1 = ref(false)
const checkbox2 = ref(false)
</script>

<template>
  <Demo>
    <component
      :is="BaseCheckbox"
      v-model="checkbox1"
      text="Checkbox"
      label="Label"
      layout="vertical"
      description="Vertical Layout"
    />
    <component
      :is="BaseCheckbox"
      v-model="checkbox2"
      text="Checkbox"
      label="Label"
      layout="horizontal"
      description="Hertical Layout"
    />
  </Demo>
</template>
