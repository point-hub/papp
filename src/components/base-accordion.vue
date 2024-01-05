<script setup lang="ts">
import { provide, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    alwaysOpen?: boolean
  }>(),
  { alwaysOpen: false }
)

const alwaysOpen = ref(props.alwaysOpen)
const activeItemId = ref(0)

provide('alwaysOpen', alwaysOpen)
provide('activeItemId', activeItemId)
</script>

<template>
  <div class="accordion-container">
    <slot></slot>
  </div>
</template>

<style scoped>
@import url('../assets/css/components/accordion.css');
</style>
