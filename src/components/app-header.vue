<script setup lang="ts">
import {
  BaseAvatar,
  BaseButton,
  BasePopover,
  BaseTab,
  BaseTabGroup,
  BaseTabList,
  BaseTabPanel,
  BaseTabPanels,
  useDarkMode,
  useSidebarStore
} from '../index'

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
      </div>
      <!-- Right Header -->
      <div class="flex items-center gap-4">
        <!-- Notification -->
        <component :is="BasePopover" placement="bottom">
          <div>
            <button type="button" class="flex items-center gap-1 relative">
              <BaseIcon icon="i-ph-bell-ringing-duotone" class="text-3xl" />
              <!-- ping -->
              <span class="absolute -right-px -top-4px h-2 w-2 flex items-center justify-center">
                <span
                  class="absolute h-full w-full inline-flex animate-ping rounded-full bg-red-400 opacity-80"
                />
                <span class="h-2 w-2 inline-flex rounded-full bg-red-400" />
              </span>
            </button>
          </div>
          <template #content>
            <div class="popper-root">
              <BaseTabGroup as="div" class="bg-slate-100 dark:bg-slate-800">
                <BaseTabList
                  class="flex overflow-x-auto overflow-y-hidden pt-4 border-b border-slate-200 dark:border-[#191e3a] scrollbar-hidden"
                >
                  <BaseTab as="template" v-slot="{ selected }">
                    <a
                      href="javascript:void(0);"
                      class="flex pb-1 px-2 gap-1 items-center !outline-none"
                      :class="{ 'border-b-2 !border-slate-500': selected }"
                    >
                      <BaseIcon icon="i-ph-bell-duotone" />
                      <p>Notifications</p>
                    </a>
                  </BaseTab>
                  <BaseTab as="template" v-slot="{ selected }">
                    <a
                      href="javascript:void(0);"
                      class="flex pb-1 px-2 gap-1 items-center !outline-none"
                      :class="{ 'border-b-2 !border-slate-500': selected }"
                    >
                      <BaseIcon icon="i-ph-folder-notch-minus-duotone" />
                      <p>Logs</p>
                    </a>
                  </BaseTab>
                </BaseTabList>
                <BaseTabPanels class="flex-1 bg-white dark:bg-slate-700 text-sm p-4">
                  <BaseTabPanel>
                    <div class="mt-8 pb-8 text-center">
                      <div class="mt-5">
                        <p class="text-base font-semibold text-slate-700 dark:text-slate-100">
                          Empty Notification
                        </p>
                        <p class="text-slate-400 dark:text-slate-300">
                          There are no new notifications
                        </p>
                      </div>
                    </div>
                  </BaseTabPanel>
                  <BaseTabPanel>
                    <div class="overflow-y-auto flex flex-col gap-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="bg-info/10 dark:bg-info/15 h-10 w-10 flex shrink-0 items-center justify-center rounded-lg"
                        >
                          <base-icon icon="i-far-pencil" />
                        </div>
                        <div>
                          <p class="font-medium text-slate-600 dark:text-slate-100">
                            01 Jan 2024 <span class="text-xs font-light">08:10</span>
                          </p>
                          <div class="flex text-sm text-slate-400 dark:text-slate-300">
                            <span class="line-clamp-1">Create new invoice #0002</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex items-center space-x-3">
                        <div
                          class="bg-info/10 dark:bg-info/15 h-10 w-10 flex shrink-0 items-center justify-center rounded-lg"
                        >
                          <base-icon icon="i-far-pencil" />
                        </div>
                        <div>
                          <p class="font-medium text-slate-600 dark:text-slate-100">
                            01 Jan 2024 <span class="text-xs font-light">08:00</span>
                          </p>
                          <div class="flex text-sm text-slate-400 dark:text-slate-300">
                            <span class="line-clamp-1">Create new invoice #0001</span>
                          </div>
                        </div>
                      </div>
                      <button class="btn btn-info btn-sm">See all logs</button>
                    </div>

                    <div class="mt-8 pb-8 text-center" v-if="false">
                      <div class="mt-5">
                        <p class="text-base font-semibold text-slate-700 dark:text-slate-100">
                          Empty Logs
                        </p>
                        <p class="text-slate-400 dark:text-slate-300">There are no unread logs</p>
                      </div>
                    </div>
                  </BaseTabPanel>
                </BaseTabPanels>
              </BaseTabGroup>
            </div>
          </template>
        </component>
        <!-- User -->
        <component :is="BasePopover" placement="bottom-start">
          <div>
            <button type="button" class="flex items-center gap-1">
              <component
                class="h-10 w-10"
                :is="BaseAvatar"
                src="https://via.placeholder.com/150"
                shape="squircle"
                name="John Doe"
              />
              <div class="flex flex-col justify-center items-start">
                <p class="text-sm font-semibold">Organization Name</p>
                <p class="text-sm">User Name</p>
              </div>
            </button>
          </div>
          <template #content>
            <div class="popper-root p-2">
              <component
                :is="BaseButton"
                variant="text"
                size="sm"
                class="text-slate-900 dark:text-slate-50 flex justify-left!"
              >
                <BaseIcon icon="i-ph-user-circle-gear-duotone" class="text-2xl" />
                <p>My Account</p>
              </component>
              <component
                :is="BaseButton"
                variant="text"
                size="sm"
                class="text-slate-900 dark:text-slate-50 flex justify-left!"
              >
                <BaseIcon icon="i-ph-buildings-duotone" class="text-2xl" />
                <p>Switch Organization</p>
              </component>
              <component
                :is="BaseButton"
                variant="text"
                size="sm"
                @click="toggleDarkMode()"
                class="text-slate-900 dark:text-slate-50 flex justify-left!"
              >
                <BaseIcon v-if="isDarkMode" icon="i-ph-sun-duotone" class="text-2xl" />
                <BaseIcon v-else icon="i-ph-moon-duotone" class="text-2xl" />
                <p>Dark Mode</p>
              </component>
              <component
                :is="BaseButton"
                variant="text"
                color="danger"
                size="sm"
                class="text-slate-900 dark:text-slate-50 flex justify-left!"
              >
                <BaseIcon icon="i-ph-sign-out-duotone" class="text-2xl" />
                <p>Sign Out</p>
              </component>
            </div>
          </template>
        </component>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav.header {
  @apply fixed top-0 flex w-full h-60px max-h-60px z-10 px-4 bg-white dark:bg-slate-900 shadow transition-all;
}

.is-sidebar-open nav.header {
  @apply lg:w-[calc(100%-(var(--sidebar-panel-width)+var(--sidebar-menu-width)))] lg:ml-[calc(var(--sidebar-panel-width)+var(--sidebar-menu-width))] duration-300 transition-all;
}

.header-container {
  @apply relative w-full flex items-center justify-between;
}
</style>
