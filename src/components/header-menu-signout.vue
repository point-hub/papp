<script setup lang="ts">
const props = defineProps<{
  onSignout: () => void
}>()
</script>

<template>
  <base-button
    variant="text"
    color="danger"
    size="sm"
    class="text-slate-900 dark:text-slate-50 flex justify-left!"
    @click="props.onSignout"
  >
    <base-icon icon="i-ph-sign-out-duotone" class="text-2xl" />
    <p>Sign Out</p>
  </base-button>
</template>

<style scoped lang="postcss"></style>
