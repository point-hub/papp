<script setup lang="ts">
defineProps<{
  version: string
}>()
</script>

<template>
  <div class="flex justify-between px-4">
    <p>Pointhub &copy; 2023-2024</p>
    <p class="self-end">v{{ version }}</p>
  </div>
</template>
