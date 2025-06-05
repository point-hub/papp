<script setup lang="ts">
import { computed } from 'vue'

import type { IAppMenu, IMenu } from '@/stores/sidebar-menu'

import { useSidebarStore } from '../index'
import AppSidebarMenu from './app-sidebar-menu.vue'
import AppSidebarPanel from './app-sidebar-panel.vue'

const sidebarStore = useSidebarStore()

const props = defineProps<{
  title: string
  isMobile: boolean
  isSidebarOpen: boolean
  apps: IAppMenu[]
  menus: IMenu[]
}>()

const emit = defineEmits<{
  (e: 'choose', path: string): void
}>()

const title = computed(() => props.title)
const isMobile = computed(() => props.isMobile)
const isSidebarOpen = computed(() => props.isSidebarOpen)
const menus = computed(() => props.menus)

const onChooseApp = (path: string) => {
  emit('choose', path)
}
</script>

<template>
  <!-- Main Sidebar -->
  <div class="sidebar">
    <!-- Sidebar Panel -->
    <component :is="AppSidebarPanel" :apps="apps" @choose="onChooseApp" />

    <!-- Sidebar Menu -->
    <component
      :is="AppSidebarMenu"
      :title="title"
      :menus="menus"
      :is-sidebar-open="isSidebarOpen"
      :is-mobile="isMobile"
    />
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
