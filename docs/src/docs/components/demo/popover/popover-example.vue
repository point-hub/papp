<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('notification')
const popoverRef = ref()
</script>

<template>
  <Demo>
    <base-popover ref="popoverRef" placement="bottom-start">
      <base-button size="md" color="primary" @click="popoverRef.toggle()">
        Trigger element
      </base-button>
      <template #content>
        <div class="popper-root">
          <div class="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200 shadow">
            <div class="flex items-center justify-between px-4 pt-2 mb-2">
              <div class="flex items-center space-x-2">
                <h3 class="font-medium text-slate-700 dark:text-slate-100">Inbox</h3>
              </div>

              <base-button variant="text"
                class="h-7 w-7 rounded-full p-0 -mr-1.5 active:bg-slate-300/25 focus:bg-slate-300/20 hover:bg-slate-300/20 dark:active:bg-slate-300/25 dark:focus:bg-slate-300/20 dark:hover:bg-slate-300/20">
                <base-icon icon="i-fa7-regular:maximize" />
              </base-button>
            </div>

            <div class="scrollbar-hidden flex shrink-0 overflow-x-auto px-3 text-sm">
              <base-button variant="text" @click="activeTab = 'notification'">
                <span>Notification</span>
                <div>
                  10
                </div>
              </base-button>
              <base-button variant="text" rounded="full" @click="activeTab = 'logs'">
                <span>Logs</span>
                <div>
                  10
                </div>
              </base-button>
            </div>

            <!-- <div class="scrollbar-hidden flex shrink-0 overflow-x-auto px-3 text-sm">
              <base-button variant="text" :class="activeTab === 'notification'
                ? 'border-primary dark:border-accent dark:text-white font-bold'
                : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-slate-100 dark:focus:text-slate-100'
                " class="shrink-0 border-b-2 rounded-none px-3.5 py-1" @click="activeTab = 'notification'">
                <span>Notification</span>
                <div class=" bg-danger text-white -mt-3 rounded text-0.5rem p-1 line-height-none">
                  10
                </div>
              </base-button>
              <base-button variant="text" rounded="full" :class="activeTab === 'logs'
                ? 'border-primary dark:border-accent dark:text-white font-bold'
                : 'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-slate-100 dark:focus:text-slate-100'
                " class="shrink-0 border-b-2 rounded-none px-3.5 py-1" @click="activeTab = 'logs'">
                <span>Logs</span>
                <div class=" bg-danger text-white -mt-3 rounded text-0.5rem p-1 line-height-none">
                  10
                </div>
              </base-button>
            </div> -->
          </div>

          <div class="flex flex-col overflow-hidden shadow-lg">
            <div v-if="activeTab === 'notification'" class="overflow-y-auto p-4 space-y-4">
              <div class="flex items-center space-x-3">
                <div class="bg-red/10 h-8 w-8 flex shrink-0 items-center justify-center rounded-lg">
                  <base-icon icon="i-fa7-regular:user" />
                </div>
                <div>
                  <p class="font-medium text-slate-600 dark:text-slate-100 text-sm">User Photo Changed</p>
                  <div class="line-clamp-1 text-xs text-slate-400 dark:text-slate-300">
                    John Doe changed his avatar photo
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="bg-info/10 h-8 w-8 flex shrink-0 items-center justify-center rounded-lg">
                  <base-icon icon="i-fa7-regular:pencil" />
                </div>
                <div>
                  <p class="font-medium text-slate-600 dark:text-slate-100 text-sm">
                    01 January 2022 <span class="text-xs font-light">08:00</span>
                  </p>
                  <div class="line-clamp-1 text-xs text-slate-400 dark:text-slate-300">
                    Create new invoice
                  </div>
                </div>
              </div>
            </div>
            <div v-if="activeTab === 'logs'" class="overflow-y-auto px-4">
              <div class="mt-8 pb-8 text-center">
                <div class="mt-5">
                  <p class="text-base font-semibold text-slate-700 dark:text-slate-100">
                    Empty logs
                  </p>
                  <p class="text-slate-400 dark:text-slate-300">There are no unread logs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </base-popover>
  </Demo>
</template>

<style scoped>
.popper-root {
  @apply border-slate-100 shadow dark:shadow-dark mx-4 mt-1 flex flex-col border rounded-lg bg-white sm:m-0 sm:w-80 dark:border-slate-800 dark:bg-slate-700;

  max-height: calc(100vh - 6rem);
  width: calc(100vw - 2rem);
}
</style>
