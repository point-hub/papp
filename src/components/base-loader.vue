<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'classic'
    sample?: number
  }>(),
  {
    type: 'classic',
    sample: 1
  }
)
</script>

<template>
  <div :class="`loader-${sample}`"><slot>Loading...</slot></div>
</template>

<style scoped>
@import url('../assets/css/components/loader.css');
</style>
