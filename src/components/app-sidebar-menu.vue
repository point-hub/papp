<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { BaseButton, useSidebarStore } from '../index'

const props = defineProps<{
  isMobile: boolean
  title: string
  menus: IMenu[]
}>()

const isMobile = computed(() => props.isMobile)
const menus = computed(() => props.menus)

const route = useRoute()
const sidebarStore = useSidebarStore()

const activeMenu = ref()
const toggleMenu = (name: string) => {
  if (activeMenu.value === name) {
    resetActiveMenu()
  } else {
    activeMenu.value = name
  }
}
const resetActiveMenu = () => {
  activeMenu.value = ''
}

const refreshMenu = () => {
  for (const menu of menus.value) {
    if (activeMenu.value === menu) {
      activeMenu.value = menu.name
    }
    if (menu.submenu) {
      for (const submenu of menu.submenu) {
        if (route.path.includes(submenu.path)) {
          activeMenu.value = menu.name
        }
      }
    }
  }
}

watch(
  () => route.path,
  () => {
    resetActiveMenu()
    refreshMenu()
  }
)

onMounted(() => {
  refreshMenu()
})

const pathHandler = (path: string) => {
  if (path.substring(0, 8) === 'https://') {
    return 'external'
  }
  return 'internal'
}
</script>

<template>
  <div class="sidebar-menu">
    <div class="sidebar-menu-container">
      <!-- Sidebar Panel Header -->
      <div class="sidebar-menu-header">
        <p class="text-base font-extrabold tracking-wider text-slate-100">{{ title }}</p>
        <component
          :is="BaseButton"
          @click="sidebarStore.closeSidebar()"
          v-if="isMobile"
          class="mr-2"
          data-testid="sidebar-button"
        >
          <div v-if="sidebarStore.isSidebarOpen">
            <base-icon icon="i-fas-angle-left" class="text-white" />
          </div>
        </component>
      </div>
      <!-- Sidebar Panel Body -->
      <div class="sidebar-menu-body">
        <ul class="flex flex-1 flex-col px-4">
          <li v-for="menu in menus" :key="menu.name">
            <!-- Sub Menu Wrapper -->
            <template v-if="menu.submenu">
              <router-link
                v-if="menu.path"
                :to="menu.path"
                class="menu-link-button"
                @click="toggleMenu(menu.name)"
                :data-testid="menu.dataTestid"
              >
                <p>{{ menu.name }}</p>
                <i
                  v-if="menu.submenu"
                  class="i-fas-angle-right"
                  :class="{
                    'rotate-90 transition transform-gpu': activeMenu === menu.name
                  }"
                />
              </router-link>
              <div
                v-else
                class="menu-link-button"
                @click="toggleMenu(menu.name)"
                :class="{ 'text-slate-50': activeMenu === menu.name }"
                :data-testid="menu.dataTestid"
              >
                <p>{{ menu.name }}</p>
                <i
                  v-if="menu.submenu"
                  class="i-fas-angle-right"
                  :class="{
                    'rotate-90 transition transform-gpu': activeMenu === menu.name
                  }"
                />
              </div>
              <ul
                class="submenu"
                :class="{
                  'max-h-[1000px]! overflow-auto bg-slate-700 px-2 py-1 w-[var(--sidebar-menu-width)] -mx-4':
                    activeMenu === menu.name
                }"
              >
                <li v-for="submenu in menu.submenu" :key="submenu.name" class="overflow-hidden">
                  <router-link
                    :to="submenu.path as string"
                    class="submenu-link"
                    :data-testid="submenu.dataTestid"
                  >
                    <div class="flex items-center space-x-2">
                      <p>{{ submenu.name }}</p>
                    </div>
                  </router-link>
                  <div v-if="submenu.separator" class="submenu-separator"></div>
                </li>
              </ul>
            </template>
            <template v-else>
              <!-- Internal Menu -->
              <router-link
                v-if="menu.path && pathHandler(menu.path) === 'internal'"
                :to="menu.path"
                class="menu-link-button"
                @click="resetActiveMenu()"
                :data-testid="menu.dataTestid"
              >
                {{ menu.name }}
              </router-link>
              <!-- External Menu -->
              <a
                v-if="menu.path && pathHandler(menu.path) === 'external'"
                :href="menu.path"
                @click="resetActiveMenu()"
                target="_blank"
                class="menu-link-button"
              >
                {{ menu.name }}
                <base-icon icon="i-fas-up-right-from-square" />
              </a>
            </template>
            <div v-if="menu.separator" class="menu-separator"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-menu {
  @apply h-full w-[var(--sidebar-menu-width)];
}

.sidebar-menu-container {
  @apply h-full flex flex-col grow;
}

.sidebar-menu-header {
  @apply flex h-16 w-full items-center justify-between pl-4 pr-1;
}

.sidebar-menu-body {
  @apply h-[calc(100%-4.5rem)] overflow-x-hidden pb-6 font-bold text-slate-400;
}

.sidebar-menu-body .menu-separator {
  @apply my-3 h-px bg-slate-700;
}

.sidebar-menu-body .submenu-separator {
  @apply my-1 h-px bg-slate-600;
}

.sidebar-menu-body .menu-link-button {
  @apply flex w-full items-center justify-between py-2 text-xs outline-none duration-300 ease-in-out hover:text-slate-50 cursor-pointer uppercase;
}

.sidebar-menu-body .submenu-link {
  @apply flex items-center justify-between p-2 text-xs outline-none duration-400 ease-in-out uppercase hover:text-slate-200;
}

.menu-link-button.router-link-active {
  @apply text-slate-50;
}

.menu-link-button.router-link-active > i {
  @apply rotate-90 transition transform-gpu;
}

.submenu-link.router-link-active p {
  @apply text-slate-50;
}

.submenu {
  @apply transform-gpu transition-all duration-300 max-h-0 overflow-hidden pl-4 pr-2 -mx-4;
}

.submenu.router-link-active {
  @apply max-h-[1000px] overflow-auto bg-slate-700 pl-4 pr-2 -mx-4;
}
</style>
