<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

import { useDarkMode } from '@/composable/dark-mode'
import { useScreenSize } from '@/composable/screen-size'

const { loadDarkMode } = useDarkMode()

export interface IToastRef {
  toast(
    message: string,
    options?: {
      lists?: string[]
      color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger'
      autoClose?: boolean
      timer?: number
    }
  ): void
}

/**
 * Provide the `toastRef` to be used in another component.
 *
 * Example:
 * import { inject, type Ref } from 'vue'
 * import type { IToastRef } from '@/main-app.vue'
 * const toastRef = inject<Ref<IToastRef>>('toastRef')
 * toastRef?.value.toast('This is an error message', { color: 'danger' })
 */
const toastRef = ref<IToastRef>()
provide('toastRef', toastRef)

/**
 * Track breakpoint on screen change
 */
useScreenSize()

/**
 * the onMounted lifecycle hook is used to perform actions
 * when a component has been mounted to the DOM
 */
onMounted(() => {
  /**
   * load dark mode configuration
   */
  loadDarkMode()
})
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <base-toast data-testid="notification" ref="toastRef" />
  </div>
</template>
