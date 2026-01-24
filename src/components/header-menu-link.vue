<script setup lang="ts">
defineProps<{
  path: string
  label: string
  icon: string
}>()
</script>

<template>
  <router-link :to="path" class="w-full">
    <base-button variant="text" color="primary" size="lg"
      class="text-slate-900 dark:text-slate-50 flex justify-left! w-full">
      <base-icon :icon="icon" class="w-1.25em" />
      <p>{{ label }}</p>
    </base-button>
  </router-link>
</template>

<style scoped lang="postcss"></style>
