import { defineStore } from 'pinia'

export interface IAppMenu {
  name: string
  path: string
  icon?: string
  menu?: IMenu[]
  dataTestid?: string
}

export interface IMenu {
  name: string
  path?: string
  separator?: boolean
  submenu?: ISubmenu[]
  dataTestid?: string
}

export interface ISubmenu {
  name: string
  path: string
  separator?: boolean
  dataTestid?: string
}

export interface IStateMenu {
  choosenAppTitle: string
  choosenAppIndex: number
  appMenu: IAppMenu[]
}

export const useSidebarMenuStore = defineStore('sidebar-menu', {
  state: (): IStateMenu => ({
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
    setAppMenu(appMenu: IAppMenu[], appList?: IAppMenu[]) {
      if (appList) {
        this.appMenu = appList.map((link, index) => {
          this.choosenAppIndex = appList.findIndex(
            (item) => item.name.toLowerCase() === appMenu[0]?.name.toLowerCase()
          )
          const match = appList[index]?.name.toLowerCase() === appMenu[0]?.name.toLowerCase()
          return {
            ...link, // base from appList
            ...(match
              ? { icon: appMenu[0]?.icon, path: appMenu[0]?.path, menu: appMenu[0]?.menu || [] }
              : {}) // override with icon, path, menu
          }
        })
        this.choosenAppTitle = this.appMenu[this.choosenAppIndex]?.name ?? ''
      } else {
        this.appMenu = appMenu
        this.choosenAppTitle = appMenu[0]?.name ?? ''
        this.choosenAppIndex = 0
      }
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
