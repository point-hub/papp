<script setup lang="ts">
import { useSidebar } from '@/composable/sidebar'
import { useSidebarStore } from '@/stores/sidebar'
import { useSidebarMenuStore } from '@/stores/sidebar-menu'

import AppSidebarMenu from './app-sidebar-menu.vue'
import AppSidebarPanel from './app-sidebar-panel.vue'

const sidebarStore = useSidebarStore()
const sidebarMenuStore = useSidebarMenuStore()
useSidebar(sidebarMenuStore.$state.listPanelMenu)
</script>

<template>
  <!-- Main Sidebar -->
  <div class="sidebar">
    <!-- Sidebar Panel -->
    <component :is="AppSidebarPanel" :listPanelMenu="sidebarMenuStore.$state.listPanelMenu" />

    <!-- Sidebar Menu -->
    <component :is="AppSidebarMenu" :listMenu="sidebarMenuStore.choosenPanelMenu" />
  </div>
  <!-- Backdrop -->
  <div class="sidebar-backdrop" @click="sidebarStore.closeSidebar()"></div>
</template>

<style scoped>
.sidebar {
  @apply fixed flex h-full bg-slate-800 z-60;
  /* transition animation */
  @apply transition-all transform-gpu ease-in-out duration-300 -ml-[calc(var(--sidebar-panel-width)+var(--sidebar-menu-width))];
}

.is-sidebar-open .sidebar {
  /* transition animation */
  @apply transition-all transform-gpu ease-in-out duration-300 ml-0;
}

.is-sidebar-open .sidebar-backdrop {
  @apply fixed inset-0 w-full h-full bg-black/50 z-50;
}

@screen lg {
  .is-sidebar-open .sidebar-backdrop {
    @apply lg:bg-black/0 lg:w-0 lg:h-0;
  }
}
</style>
