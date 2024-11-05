<script setup lang="ts">
const props = defineProps<{
  apps: IApps[]
}>()

const emit = defineEmits<{
  (e: 'choose', path: string): void
}>()

const pathHandler = (path: string) => {
  if (path.substring(0, 8) === 'https://') {
    return 'external'
  }
  return 'internal'
}

const iconHandler = (icon: string) => {
  if (icon.substring(0, 8) === 'https://') {
    return 'img'
  }
}

const chooseApp = (path: string) => {
  emit('choose', path)
}
</script>

<template>
  <div class="sidebar-panel">
    <div class="sidebar-panel-container">
      <div class="sidebar-panel-body">
        <template v-for="(app, index) in props.apps">
          <!-- Internal Menu -->
          <router-link
            v-if="pathHandler(app.path) === 'internal'"
            :key="`internal-${index}`"
            :to="app.path"
            @click="chooseApp(app.path)"
            class="sidebar-panel-link"
          >
            <div class="flex flex-col items-center">
              <img
                v-if="app.icon && iconHandler(app.icon) === 'img'"
                :src="app.icon"
                class="pt-2 px-1 max-w-12 max-h-12"
              />
              <img
                v-else
                src="@/assets/images/placeholder-app-icon.png"
                class="pt-2 px-1 max-w-12 max-h-12"
              />
              <div
                class="text-center px-1 py-2 text-9px font-semibold line-height-tight break-anywhere"
              >
                {{ app.name }}
              </div>
            </div>
          </router-link>
          <!-- External Menu -->
          <a
            v-else-if="pathHandler(app.path) === 'external'"
            :key="`external-${index}`"
            :href="app.path"
            class="sidebar-panel-link"
          >
            <div class="flex flex-col items-center">
              <img
                v-if="app.icon && iconHandler(app.icon) === 'img'"
                :src="app.icon"
                class="pt-2 px-1 max-w-12 max-h-12"
              />
              <img
                v-else
                src="@/assets/images/placeholder-app-icon.png"
                class="pt-2 px-1 max-w-12 max-h-12"
              />
              <div
                class="text-center px-1 py-2 text-9px font-semibold line-height-tight break-anywhere"
              >
                {{ app.name }}
              </div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.break-anywhere {
  word-break: break-word;
}

@supports (overflow-wrap: anywhere) {
  .break-anywhere {
    overflow-wrap: anywhere;
    word-break: normal;
  }
}

.sidebar-panel {
  @apply w-[var(--sidebar-panel-width)] h-full;
}

.sidebar-panel-container {
  @apply flex h-full w-full flex-col items-center border-r border-slate-700;
}

.sidebar-panel-body {
  @apply flex grow flex-col w-full overflow-y-auto pt-6 text-slate-200;
}

.sidebar-panel-link {
  @apply flex w-full text-xs items-center justify-center  outline-none transition-colors duration-200 hover:bg-slate-300/20;
}

.sidebar-panel-link.router-link-active {
  @apply bg-slate-300/20;
}
</style>
