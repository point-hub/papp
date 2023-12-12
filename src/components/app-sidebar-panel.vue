<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { useSidebarMenuStore, type PanelMenuInterface } from '@/stores/sidebar-menu'

const sidebarMenuStore = useSidebarMenuStore()
const sidebarStore = useSidebarStore()

const props = defineProps<{
  listPanelMenu: PanelMenuInterface[]
}>()
</script>

<template>
  <div class="sidebar-panel" :class="{ 'delay-100 duration-200': !sidebarStore.isSidebarOpen }">
    <div class="sidebar-panel-container">
      <div class="flex pt-4">
        <router-link to="/">
          <img
            class="sidebar-logo"
            src="https://assets.pointhub.net/assets/images/logo/primary/icon-circle.png"
            alt="logo"
          />
        </router-link>
      </div>
      <div class="sidebar-panel-body">
        <template v-for="(panelMenu, index) in props.listPanelMenu" :key="panelMenu.icon">
          <!-- Internal Menu -->
          <router-link
            v-if="panelMenu.path"
            :to="panelMenu.path"
            class="sidebar-panel-link"
            :class="{
              'bg-slate-300/20': sidebarMenuStore.$state.activePanelIndex === index
            }"
            v-tooltip="{ content: panelMenu.name, placement: 'bottom' }"
          >
            <i :class="`block text-2xl ${panelMenu.icon}`"></i>
          </router-link>
          <!-- External Menu -->
          <a v-else-if="panelMenu.link" :href="panelMenu.link" class="sidebar-panel-link">
            <i :class="`block text-2xl ${panelMenu.icon}`"></i>
          </a>
        </template>
      </div>
      <div class="my-2">
        <button class="sidebar-panel-link" v-tooltip="{ content: 'logout', placement: 'top' }">
          <base-icon icon="i-fas-power-off" class="bg-slate-300 text-2xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-logo {
  @apply h-10 w-10 transition-transform duration-500 hover:rotate-[360deg];
}

.sidebar-panel {
  @apply w-[var(--sidebar-panel-width)] h-full;
}

.sidebar-panel-container {
  @apply flex h-full w-full flex-col items-center border-r border-slate-700;
}

.sidebar-panel-body {
  @apply flex grow flex-col space-y-4 overflow-y-auto pt-6 text-slate-200;
}

.sidebar-panel-link {
  @apply flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-slate-300/20;
}

.sidebar-panel-link.router-link-active {
  @apply bg-slate-300/20;
}
</style>
