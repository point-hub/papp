<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useSidebarStore } from '../index'

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

onMounted(() => {
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
        <button @click="sidebarStore.closeSidebar()" v-if="isMobile" class="mr-2">
          <div v-if="sidebarStore.isSidebarOpen">
            <base-icon icon="i-fas-angle-left" class="text-white" />
          </div>
        </button>
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
                :class="{ 'font-extrabold': activeMenu === menu.name }"
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
                  'max-h-[1000px]! overflow-auto bg-slate-700 p-1 rounded-lg':
                    activeMenu === menu.name
                }"
              >
                <li v-for="submenu in menu.submenu" :key="submenu.name" class="overflow-hidden">
                  <router-link :to="submenu.path as string" class="submenu-link">
                    <div class="flex items-center space-x-2">
                      <div class="bullet-list"></div>
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
              >
                {{ menu.name }}
              </router-link>
              <!-- External Menu -->
              <a
                v-if="menu.path && pathHandler(menu.path) === 'external'"
                :href="menu.path"
                @click="resetActiveMenu()"
                target="_blank"
                class="menu-link-button !text-slate-200/80"
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
  @apply h-[calc(100%-4.5rem)] overflow-x-hidden pb-6;
}

.sidebar-menu-body .menu-separator {
  @apply my-3 h-px bg-slate-700;
}

.sidebar-menu-body .submenu-separator {
  @apply my-1 h-px bg-slate-600;
}

.sidebar-menu-body .bullet-list {
  @apply h-1.5 w-1.5 rounded-full border border-current opacity-40;
}

.sidebar-menu-body .menu-link-button {
  @apply flex w-full items-center justify-between py-2 text-sm outline-none duration-300 ease-in-out text-slate-200 hover:text-slate-50 cursor-pointer;
}

.sidebar-menu-body .submenu-link {
  @apply flex items-center justify-between p-2 text-sm  outline-none duration-300 ease-in-out hover:pl-4 text-slate-200 hover:text-slate-50;
}

.menu-link-button.router-link-active {
  @apply font-extrabold;
}

.menu-link-button.router-link-active > i {
  @apply rotate-90 transition transform-gpu;
}

.submenu-link.router-link-active > .bullet-list {
  @apply bg-white;
}

.submenu-link.router-link-active p {
  @apply font-extrabold;
}

.submenu {
  @apply transform-gpu transition-all duration-300 max-h-0 overflow-hidden;
}

.submenu.router-link-active {
  @apply max-h-[1000px] overflow-auto bg-slate-700 p-1 rounded-lg;
}
</style>
