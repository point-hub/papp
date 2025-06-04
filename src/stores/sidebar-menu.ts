import { defineStore } from 'pinia'

interface IAppMenu {
  name: string
  path: string
  icon?: string
  menu?: IMenu[]
  dataTestid?: string
}

interface IMenu {
  name: string
  path?: string
  separator?: boolean
  submenu?: ISubmenu[]
  dataTestid?: string
}

interface ISubmenu {
  name: string
  path: string
  separator?: boolean
  dataTestid?: string
}

export interface StateInterface {
  choosenAppTitle: string
  choosenAppIndex: number
  appMenu: IAppMenu[]
}

export const useSidebarMenuStore = defineStore('sidebar-menu', {
  state: (): StateInterface => ({
    choosenAppTitle: '',
    choosenAppIndex: 0,
    appMenu: []
  }),
  getters: {
    getChoosenAppTitle: (state) => {
      return state.choosenAppTitle
    },
    getChoosenAppIndex: (state) => {
      return state.choosenAppIndex
    }
  },
  actions: {
    setAppMenu(appMenu: IAppMenu[], appLinks: IAppMenu[]) {
      this.appMenu = appLinks.map((link, index) => {
        this.choosenAppIndex = appLinks.findIndex(
          (item) => item.name.toLowerCase() === appMenu[0].name.toLowerCase()
        )
        const match = appLinks[index].name.toLowerCase() === appMenu[0].name.toLowerCase()
        return {
          ...link, // base from appLinks
          ...(match
            ? { icon: appMenu[0].icon, path: appMenu[0].path, menu: appMenu[0].menu || [] }
            : {}) // override with icon, path, menu
        }
      })
      this.choosenAppTitle = this.appMenu[this.choosenAppIndex].name
    },
    onChooseApp(path: string) {
      for (const [index, app] of this.appMenu.entries()) {
        if (app.path === path) {
          this.choosenAppTitle = app.name
          this.choosenAppIndex = index
        }
      }
    }
  }
})
