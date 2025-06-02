interface IApps {
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
