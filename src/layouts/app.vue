<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import AppFooter from '@/components/app-footer.vue'
import AppHeader from '@/components/app-header.vue'
import AppSidebar from '@/components/app-sidebar.vue'
import HeaderMenu from '@/components/header-menu.vue'
import HeaderMenuAccount from '@/components/header-menu-account.vue'
import HeaderMenuDarkMode from '@/components/header-menu-dark-mode.vue'
import HeaderMenuSignout from '@/components/header-menu-signout.vue'
import HeaderMenuSwitchOrganization from '@/components/header-menu-switch-organization.vue'
import HeaderNotification from '@/components/header-notification.vue'
import HeaderSidebarButton from '@/components/header-sidebar-button.vue'
import { useSidebarMenuStore } from '@/stores/sidebar-menu'

import { version } from '../../package.json'
import { useMobileBreakpoint, useSidebar, useSidebarStore } from '../index'
import { useDarkMode } from '../index'

const { isDarkMode, toggleDarkMode } = useDarkMode()
const route = useRoute()

useSidebar()

const mobileBreakpoint = useMobileBreakpoint()
const sidebarStore = useSidebarStore()
const sidebarMenuStore = useSidebarMenuStore()

// Sidebar
const appMenu = [
  {
    name: 'App 3',
    path: '/',
    icon: 'https://assets.pointhub.net/assets/images/logo/primary/icon-rounded.png',
    menu: [
      {
        name: 'Home',
        path: '/home',
        dataTestid: 'menu-home'
      },
      {
        name: 'Cypress Selector',
        path: '/cypress-selector',
        dataTestid: 'menu-cypress-selector'
      },
      {
        name: 'Nested Page',
        dataTestid: 'menu-nested-page',
        submenu: [
          {
            name: 'Page 1',
            path: '/nested/page-1',
            dataTestid: 'submenu-nested-page-1'
          },
          {
            name: 'Page 2',
            path: '/nested/page-2',
            dataTestid: 'submenu-nested-page-2'
          },
          {
            name: 'Page 3',
            path: '/nested/page-3',
            dataTestid: 'submenu-nested-page-3'
          },
          {
            name: 'Page 4',
            path: '/nested/page-4',
            dataTestid: 'submenu-nested-page-4'
          },
          {
            name: 'Page 5',
            path: '/nested/page-5',
            dataTestid: 'submenu-nested-page-5'
          }
        ],
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
  }
]

const appList = [
  {
    name: 'APP 1',
    path: 'https://www.example.com'
  },
  {
    name: 'APP 2',
    path: 'https://www.example.com'
  },
  {
    name: 'APP 3',
    path: 'https://www.example.com'
  },
  {
    name: 'APP 4',
    path: 'https://www.example.com'
  }
]

sidebarMenuStore.setAppMenu(appMenu, appList)

// Header
const account = ref({
  organization: 'Organization',
  username: 'John Doe',
  avatar: 'https://placehold.co/150'
})

const organizations = ref([
  {
    name: 'Organization ABC',
    link: '?organization=abc'
  }
])

const onSignout = () => {
  // Handle signout
}

onMounted(() => {
  sidebarMenuStore.onChooseApp(route.path)
})
</script>

<template>
  <div class="app-layout">
    <!-- Header -->
    <app-header>
      <template #left-header>
        <header-sidebar-button :on-toggle-sidebar="sidebarStore.toggleSidebar"
          v-model:is-sidebar-open="sidebarStore.isSidebarOpen" />
      </template>
      <template #right-header>
        <header-notification></header-notification>
        <base-divider class="h-10" orientation="horizontal" />
        <header-menu :organization="account.organization" :username="account.username" :avatar="account.avatar">
          <header-menu-account :organization="account.organization" :username="account.username"
            :avatar="account.avatar" />
          <base-divider orientation="vertical" />
          <header-menu-switch-organization :organizations="organizations" />
          <header-menu-dark-mode :on-toggle-dark-mode="toggleDarkMode" v-model:is-dark-mode="isDarkMode" />
          <header-menu-signout :on-signout="onSignout" />
        </header-menu>
      </template>
    </app-header>

    <!-- Sidebar -->
    <app-sidebar :title="sidebarMenuStore.choosenAppTitle" :apps="sidebarMenuStore.appMenu"
      :menus="sidebarMenuStore.appMenu[sidebarMenuStore.choosenAppIndex]?.menu ?? []"
      :is-sidebar-open="sidebarStore.isSidebarOpen" :is-mobile="mobileBreakpoint.isMobile()"
      @choose="sidebarMenuStore.onChooseApp" />

    <!-- Main Container -->
    <div class="main-container">
      <!-- Main Content -->
      <main class="main-content">
        <router-view></router-view>
      </main>

      <!-- Footer -->
      <app-footer :version="version" :year="2023" />
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
