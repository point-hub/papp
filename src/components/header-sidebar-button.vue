<script setup lang="ts">
const props = defineProps<{
  onToggleSidebar: () => void
}>()

const isSidebarOpen = defineModel<boolean>('is-sidebar-open')
</script>

<template>
  <a href="javascript:void(0)" @click="props.onToggleSidebar()">
    <i v-if="!isSidebarOpen" class="block w-6 h-6 i-lucide-panel-right-close"></i>
    <i v-else class="block w-6 h-6 i-lucide-panel-left-close"></i>
  </a>
</template>

<style scoped lang="postcss"></style>
