import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'

export function useSidebar() {
  const sidebarStore = useSidebarStore()
  const route = useRoute()
  const { isMobile } = useMobileBreakpoint()

  onMounted(() => {
    setDefaultOpenSidebar()
  })

  // Close sidebar if change route in mobile
  watch(
    route,
    async () => {
      if (isMobile()) {
        sidebarStore.closeSidebar()
      }
    },
    { immediate: true }
  )

  /**
   * Set default open sidebar by breakpoint
   * sm, md, lg default sidebar is open
   * xl and 2xl default sidebar is closed
   */
  const setDefaultOpenSidebar = () => {
    if (isMobile()) {
      sidebarStore.closeSidebar()
    } else {
      sidebarStore.openSidebar()
    }
  }
}
