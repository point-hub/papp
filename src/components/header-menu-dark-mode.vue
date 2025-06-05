<script setup lang="ts">
const props = defineProps<{
  onToggleDarkMode: () => void
}>()

const isDarkMode = defineModel<boolean>('is-dark-mode')
</script>

<template>
  <base-button
    variant="text"
    color="primary"
    size="sm"
    @click="props.onToggleDarkMode()"
    class="text-slate-900 dark:text-slate-50 flex justify-left!"
  >
    <base-icon v-if="isDarkMode" icon="i-ph-sun-duotone" class="text-2xl" />
    <base-icon v-else icon="i-ph-moon-duotone" class="text-2xl" />
    <p>Dark Mode</p>
  </base-button>
</template>

<style scoped lang="postcss"></style>
