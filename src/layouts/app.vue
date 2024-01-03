<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '@/components/app-header.vue'
import AppPreloader from '@/components/app-preloader.vue'
import AppSidebar from '@/components/app-sidebar.vue'

import { version } from '../../package.json'
import { AppFooter, useMobileBreakpoint, useSidebar, useSidebarStore } from '../index'

const route = useRoute()

useSidebar()

const mobileBreakpoint = useMobileBreakpoint()
const sidebarStore = useSidebarStore()

const apps: IApps[] = [
  {
    name: 'App 1A',
    path: '/app1a',
    icon: 'https://assets.pointhub.net/assets/images/logo/primary/icon-rounded.png',
    menu: [
      {
        name: 'Home',
        path: '/app1a/home'
      },
      {
        name: 'Websocket',
        path: '/app1a/websocket'
      },
      {
        name: 'Nested Menu',
        submenu: [
          { name: 'Page 1', path: '/app1a/nested/page-1' },
          { name: 'Page 2', path: '/app1a/nested/page-2' }
        ]
      }
    ]
  },
  {
    name: 'App 1B',
    path: '/app1b',
    icon: 'https://assets.pointhub.net/assets/images/logo/primary/icon-rounded.png',
    menu: [
      {
        name: 'Home',
        path: '/app1b/home',
        separator: true
      },
      {
        name: 'unocss.dev',
        path: 'https://unocss.dev/'
      },
      {
        name: 'fontawesome.com',
        path: 'https://fontawesome.com/search'
      },
      {
        name: 'iconify.design',
        path: 'https://icon-sets.iconify.design'
      },
      {
        name: 'icones',
        path: 'https://icones.js.org/'
      },
      {
        name: 'undraw.co',
        path: 'https://undraw.co/illustrations'
      },
      {
        name: 'vuejs.org',
        path: 'https://vuejs.org/'
      },
      {
        name: 'vitejs.dev',
        path: 'https://vitejs.dev/'
      }
    ]
  },
  {
    name: 'App 2',
    path: 'https://www.example.com'
  },
  {
    name: 'App 3',
    path: 'https://www.example.com'
  },
  {
    name: 'App 4',
    path: 'https://www.example.com'
  }
]

const choosenAppIndex = ref(0)
const choosenTitle = ref(apps[choosenAppIndex.value].name)
const onChooseApp = (path: string) => {
  for (const [index, app] of apps.entries()) {
    if (app.path === path) {
      choosenTitle.value = app.name
      choosenAppIndex.value = index
    }
  }
}

onMounted(() => {
  for (const [index, app] of apps.entries()) {
    if (route.path.includes(app.path)) {
      choosenTitle.value = app.name
      choosenAppIndex.value = index
    }
  }
})
</script>

<template>
  <component :is="AppPreloader" />

  <div class="app-layout">
    <!-- Header -->
    <component :is="AppHeader" />

    <!-- Sidebar -->
    <component
      :is="AppSidebar"
      :title="choosenTitle"
      :apps="apps"
      :menus="apps[choosenAppIndex].menu ?? []"
      :is-sidebar-open="sidebarStore.isSidebarOpen"
      :is-mobile="mobileBreakpoint.isMobile()"
      @choose="onChooseApp"
    />

    <!-- Main Container -->
    <div class="main-container">
      <!-- Main Content -->
      <main class="main-content">
        <router-view></router-view>
      </main>

      <!-- Footer -->
      <component :is="AppFooter" :version="version" />
    </div>
  </div>
</template>

<style scoped lang="postcss">
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
