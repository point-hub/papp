import { defineStore } from 'pinia'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export interface PanelMenuInterface {
  name: string
  icon?: string
  path?: string
  link?: string
  menu?: MenuInterface[]
}

export interface MenuInterface {
  name: string
  path?: string
  link?: string
  separator?: boolean
  submenu?: SubmenuInterface[]
}

export interface SubmenuInterface {
  name: string
  path?: string
  link?: string
  separator?: boolean
}

export interface StateInterface {
  activePanelIndex: number
  activePanelName: string
  activeMenuName: string
  listPanelMenu: PanelMenuInterface[]
}

export const useSidebarMenuStore = defineStore('sidebar-menu', {
  state: (): StateInterface => ({
    activePanelIndex: 0,
    activePanelName: '',
    activeMenuName: '',
    listPanelMenu: [
      {
        name: 'Main Menu',
        path: '/',
        icon: 'i-fad-house-chimney',
        menu: [
          {
            name: 'Page 1',
            path: '/page1'
          },
          {
            name: 'Page 2',
            path: '/page2'
          }
        ]
      },
      {
        name: 'Template',
        path: '/template',
        icon: 'i-fad-wand-magic-sparkles',
        menu: [
          {
            name: 'Component',
            submenu: [
              { name: 'Accordion', path: '/template/components/accordion' },
              { name: 'Alert', path: '/template/components/alert' },
              { name: 'Avatar', path: '/template/components/avatar' },
              { name: 'Badge', path: '/template/components/badge' },
              { name: 'Breadcrumb', path: '/template/components/breadcrumb' },
              { name: 'Button', path: '/template/components/button' },
              { name: 'Button Group', path: '/template/components/button-group' },
              { name: 'Card', path: '/template/components/card' },
              { name: 'Collapse', path: '/template/components/collapse' },
              { name: 'Divider', path: '/template/components/divider' },
              { name: 'Dropdown', path: '/template/components/dropdown' },
              { name: 'Mask', path: '/template/components/mask' },
              { name: 'Modal', path: '/template/components/modal' },
              { name: 'Notification', path: '/template/components/notification' },
              { name: 'Popover', path: '/template/components/popover' },
              { name: 'Progress', path: '/template/components/progress' },
              { name: 'Spinner', path: '/template/components/spinner' },
              { name: 'Steps', path: '/template/components/steps' },
              { name: 'Table', path: '/template/components/table' },
              { name: 'Tabs', path: '/template/components/tabs' },
              { name: 'Timeline', path: '/template/components/timeline' },
              { name: 'Treeview', path: '/template/components/treeview' }
            ]
          },
          {
            name: 'Form',
            separator: true,
            submenu: [
              { name: 'Autocomplete', path: '/template/forms/autocomplete' },
              { name: 'Checkbox', path: '/template/forms/checkbox' },
              { name: 'Datepicker', path: '/template/forms/datepicker' },
              { name: 'File Upload', path: '/template/forms/file-upload' },
              { name: 'Input Text', path: '/template/forms/input-text' },
              { name: 'Input Group', path: '/template/forms/input-group' },
              { name: 'Input Mask', path: '/template/forms/input-mask' },
              { name: 'Radio', path: '/template/forms/radio' },
              { name: 'Radio Group', path: '/template/forms/radio-group' },
              { name: 'Switch', path: '/template/forms/switch' },
              { name: 'Select', path: '/template/forms/select' },
              { name: 'Range', path: '/template/forms/range' },
              { name: 'Textarea', path: '/template/forms/textarea' }
            ]
          },
          {
            name: 'unocss.dev',
            link: 'https://unocss.dev/'
          },
          {
            name: 'fontawesome.com',
            link: 'https://fontawesome.com/search'
          },
          {
            name: 'iconify.design',
            link: 'https://icon-sets.iconify.design'
          },
          {
            name: 'icones',
            link: 'https://icones.js.org/'
          },
          {
            name: 'undraw.co',
            link: 'https://undraw.co/illustrations'
          },
          {
            name: 'vuejs.org',
            link: 'https://vuejs.org/'
          },
          {
            name: 'vitejs.dev',
            link: 'https://vitejs.dev/'
          }
        ]
      }
    ]
  }),
  getters: {
    choosenPanelMenu: (state) => {
      return state.listPanelMenu[state.activePanelIndex].menu as MenuInterface[]
    }
  },
  actions: {
    setActiveMenu(route: RouteLocationNormalizedLoaded, listPanelMenu: PanelMenuInterface[]) {
      for (const [index, panelMenu] of listPanelMenu.entries()) {
        if (route.path === panelMenu.path) {
          this.$state.activePanelName = panelMenu.name
          this.$state.activePanelIndex = index
          return
        }
        for (const menu of panelMenu.menu ?? []) {
          if (menu.path !== '/' && route.path.includes(menu.path as string)) {
            this.$state.activePanelName = panelMenu.name
            this.$state.activePanelIndex = index
            this.$state.activeMenuName = menu.name
            return
          }
          for (const submenu of menu.submenu ?? []) {
            if (route.path.includes(submenu.path as string)) {
              this.$state.activePanelName = panelMenu.name
              this.$state.activePanelIndex = index
              this.$state.activeMenuName = menu.name
              return
            }
          }
        }
      }
    },
    toggleMenu(name: string) {
      if (this.$state.activeMenuName === name) {
        this.$state.activeMenuName = ''
      } else {
        this.$state.activeMenuName = name
      }
    }
  }
})
