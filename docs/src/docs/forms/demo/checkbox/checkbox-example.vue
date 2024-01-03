<script setup lang="ts">
import { BaseCheckbox } from '@point-hub/papp'
import { ref } from 'vue'

const form = ref({
  checkbox: false
})
</script>

<template>
  <Demo is-row>
    <component :is="BaseCheckbox" v-model="form.checkbox" text="Checkbox" />
  </Demo>
</template>
