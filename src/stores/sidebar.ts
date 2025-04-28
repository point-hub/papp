import { defineStore } from 'pinia'

const isClient = typeof window !== 'undefined'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isSidebarOpen: isClient ? document.body.classList.contains('is-sidebar-open') : false
  }),
  actions: {
    toggleSidebar() {
      if (isClient) {
        this.isSidebarOpen = document.body.classList.contains('is-sidebar-open')
      }
      if (this.isSidebarOpen) {
        this.closeSidebar()
      } else {
        this.openSidebar()
      }
    },
    openSidebar() {
      if (isClient) {
        document.body.classList.add('is-sidebar-open')
      }
      this.isSidebarOpen = true
    },
    closeSidebar() {
      if (isClient) {
        document.body.classList.remove('is-sidebar-open')
      }
      this.isSidebarOpen = false
    }
  }
})
