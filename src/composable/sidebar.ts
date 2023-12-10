import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
import { useSidebarMenuStore, type PanelMenuInterface } from '@/stores/sidebar-menu'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'

export function useSidebar(panelMenu: PanelMenuInterface[]) {
  const sidebarStore = useSidebarStore()
  const sidebarMenuStore = useSidebarMenuStore()
  const route = useRoute()
  const { isMobileBreakpoint } = useMobileBreakpoint()

  onMounted(() => {
    setDefaultOpenSidebar()
  })

  // Close sidebar if change route in mobile
  watch(
    route,
    async () => {
      sidebarMenuStore.setActiveMenu(route, panelMenu)
      if (isMobileBreakpoint()) {
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
    if (isMobileBreakpoint()) {
      sidebarStore.closeSidebar()
    } else {
      sidebarStore.openSidebar()
    }
  }
}
