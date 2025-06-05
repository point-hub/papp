<script setup lang="ts">
const props = defineProps<{
  version: string
  year: number
}>()

const showYear =
  props.year === new Date().getFullYear() ? props.year : `${props.year}-${new Date().getFullYear()}`
</script>

<template>
  <div class="flex justify-between px-4">
    <p>Pointhub &copy; {{ showYear }}</p>
    <p class="self-end">v{{ version }}</p>
  </div>
</template>
