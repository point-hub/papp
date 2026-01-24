<script setup lang="ts">
const props = defineProps<{
  onSignout: () => void
}>()
</script>

<template>
  <base-button variant="text" color="danger" size="lg" class="text-slate-900 dark:text-slate-50 flex justify-left!"
    @click="props.onSignout">
    <base-icon icon="i-ph:sign-out-duotone" class="w-1.25em" />
    <p>Sign Out</p>
  </base-button>
</template>

<style scoped lang="postcss"></style>
