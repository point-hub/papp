<script setup lang="ts">
import { ref } from 'vue'
import { BaseCheckbox } from '@point-hub/papp'

const form = ref({
  checkbox: false
})
</script>

<template>
  <Demo is-row>
    <component :is="BaseCheckbox" v-model="form.checkbox" text="Checkbox" />
  </Demo>
</template>
