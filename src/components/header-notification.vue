<script setup lang="ts">
import { ref } from 'vue'

import {
  BaseButton,
  BasePopover,
  BaseTab,
  BaseTabGroup,
  BaseTabList,
  BaseTabPanel,
  BaseTabPanels
} from '../index'

const notificationPopoverRef = ref()
</script>

<template>
  <!-- Notification -->
  <base-popover ref="notificationPopoverRef" placement="bottom">
    <base-button type="button" size="xs" @click="notificationPopoverRef.toggle()">
      <BaseIcon icon="i-ph-bell-ringing" class="w-6 h-6" />
      <!-- ping -->
      <span class="absolute -mt-6 -mr-6 h-2 w-2 flex items-center justify-center">
        <span class="absolute h-full w-full inline-flex animate-ping rounded-full bg-red-400 opacity-80" />
        <span class="h-2 w-2 inline-flex rounded-full bg-red-400" />
      </span>
    </base-button>
    <template #content>
      <div class="popper-root">
        <BaseTabGroup as="div" class="bg-slate-100 dark:bg-slate-800">
          <BaseTabList
            class="flex overflow-x-auto overflow-y-hidden pt-4 border-b border-slate-200 dark:border-[#191e3a] scrollbar-hidden">
            <BaseTab as="template" v-slot="{ selected }">
              <a href="javascript:void(0);" class="flex pb-1 px-2 gap-1 items-center !outline-none"
                :class="{ 'border-b-2 !border-slate-500': selected }">
                <BaseIcon icon="i-ph-bell-duotone" />
                <p>Notifications</p>
              </a>
            </BaseTab>
            <BaseTab as="template" v-slot="{ selected }">
              <a href="javascript:void(0);" class="flex pb-1 px-2 gap-1 items-center !outline-none"
                :class="{ 'border-b-2 !border-slate-500': selected }">
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
                  <p class="text-slate-400 dark:text-slate-300">There are no new notifications</p>
                </div>
              </div>
            </BaseTabPanel>
            <BaseTabPanel>
              <div class="overflow-y-auto flex flex-col gap-4">
                <div class="flex items-center space-x-3">
                  <div
                    class="bg-info/10 dark:bg-info/15 h-10 w-10 flex shrink-0 items-center justify-center rounded-lg">
                    <base-icon icon="i-fa7-regular:pencil" />
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
                    class="bg-info/10 dark:bg-info/15 h-10 w-10 flex shrink-0 items-center justify-center rounded-lg">
                    <base-icon icon="i-fa7-regular:pencil" />
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
  </base-popover>
</template>

<style scoped lang="postcss">
@import url('../assets/css/components/popper.css');
</style>
