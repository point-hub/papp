<script setup lang="ts">
import { version } from '../../package.json'
</script>

<template>
  <div class="flex justify-between px-4">
    <p>Pointhub &copy; 2023</p>
    <p class="self-end">v{{ version }}</p>
  </div>
</template>
