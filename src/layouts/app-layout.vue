<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/app-header.vue'
import AppSidebar from '@/components/app-sidebar.vue'
import AppFooter from '@/components/app-footer.vue'
import AppPreloader from '@/components/app-preloader.vue'
import { useDarkMode } from '@/composable/dark-mode'

const { loadDarkMode } = useDarkMode()

onMounted(() => {
  loadDarkMode()
})
</script>

<template>
  <component :is="AppPreloader" />

  <div class="app-layout">
    <!-- Header -->
    <component :is="AppHeader" />

    <!-- Sidebar -->
    <component :is="AppSidebar" />

    <!-- Main Container -->
    <div class="main-container">
      <!-- Main Content -->
      <main class="main-content">
        <router-view></router-view>
      </main>

      <!-- Footer -->
      <component :is="AppFooter" />
    </div>
  </div>
</template>

<style>
.app-layout {
  @apply h-100vh w-full flex grow;
}

.main-container {
  @apply flex flex-col py-4 w-full transition-all duration-300;
}

.is-sidebar-open .main-container {
  @apply lg:w-[calc(100%-(var(--sidebar-panel-width)+var(--sidebar-menu-width)))] lg:ml-[calc(var(--sidebar-panel-width)+var(--sidebar-menu-width))];
}

.main-content {
  @apply mt-[60px] px-4 flex-1;
}

.main-content-header {
  @apply flex space-x-4 py-2 overflow-x-hidden;
}

.main-content-body {
  @apply flex flex-col space-y-5;
}
</style>
