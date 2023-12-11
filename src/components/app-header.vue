<script setup lang="ts">
import { useDarkMode } from '@/composable/dark-mode'
import { useSidebarStore } from '@/stores/sidebar'

const { isDarkMode, toggleDarkMode } = useDarkMode()
const sidebarStore = useSidebarStore()
</script>

<template>
  <nav class="header">
    <div class="header-container">
      <!-- Left Header -->
      <div class="flex items-center gap-4">
        <a href="javascript:void(0)" @click="sidebarStore.toggleSidebar()">
          <i v-if="!sidebarStore.isSidebarOpen" class="block w-6 h-6 i-far-bars"></i>
          <i v-else class="block w-6 h-6 i-far-xmark"></i>
        </a>
        <router-link to="/">
          <h1>Papp</h1>
        </router-link>
      </div>
      <!-- Right Header -->
      <div class="flex gap-6 p-4">
        <a href="javascript:void(0)" @click="toggleDarkMode()">
          <i v-if="isDarkMode" class="i-ph-sun block w-6 h-6"></i>
          <i v-else class="i-ph-moon-fill block w-6 h-6"></i>
        </a>
        <a href=""><i class="i-fab-github block h-6 w-6"></i></a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav.header {
  @apply fixed top-0 flex w-full h-60px z-10 px-4 bg-white dark:bg-slate-900 shadow transition-all;
}

.is-sidebar-open nav.header {
  @apply lg:w-[calc(100% - (var(--sidebar-panel-width) + var(--sidebar-menu-width)))] lg:ml-[calc(var(--sidebar-panel-width) + var(--sidebar-menu-width))] duration-300 transition-all;
}

.header-container {
  @apply relative w-full flex items-center justify-between;
}
</style>
