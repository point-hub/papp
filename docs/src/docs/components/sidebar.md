---
outline: deep
---

# Sidebar

```bash
[root]
└── src
    ├── components
    │   ├── app-sidebar.vue
    │   ├── app-sidebar-panel.vue
    │   └── app-sidebar-menu.vue
    ├── stores
    │   └── sidebar-store.ts
    └── layouts
        └── app.vue
```

## Application Menu Configuration

This file defines two important configuration arrays: `appMenu` and `appList`.

| Key       | Purpose                                | Path Example              |
| --------- | -------------------------------------- | ------------------------- |
| `appMenu` | Defines the navigation within this app | `/home`, `/nested/page-2` |
| `appList` | Links to other apps in the suite       | `https://www.example.com` |

`appMenu` is used to define the in-app navigation structure for the current application. It includes all the menu items and their corresponding routes (both internal and external), icons, and optional nested submenus.

**Structure:**

- name: Display name of the application (e.g., "App 3").
- path: Root path of the application.
- icon: URL for the application icon.
- menu: Array of menu items that appear in the app sidebar or navigation bar.

**Each menu item can have:**

- name: The label shown to the user.
- path: Route path (internal like /home or external like https://vuejs.org/).
- dataTestid: (Optional) Used for testing (e.g., Cypress selectors).
- submenu: (Optional) For nested menu structures (multi-level navigation).
- separator: (Optional) Boolean indicating visual separation in the menu UI.

`appList` contains links to other external applications in your ecosystem or collection. These apps are not part of the current app's internal routing, but users may navigate to them.

**Structure:**

- name: The name or label of the external application.
- path: The full URL to the external app.

```ts
// app.vue

const appMenu = [
  {
    name: 'App 3',
    path: '/',
    icon: 'https://assets.pointhub.net/assets/images/logo/primary/icon-rounded.png',
    menu: [
      {
        name: 'Home',
        path: '/home',
        dataTestid: 'menu-home'
      },
      {
        name: 'Cypress Selector',
        path: '/cypress-selector',
        dataTestid: 'menu-cypress-selector'
      },
      {
        name: 'Nested Page',
        dataTestid: 'menu-nested-page',
        submenu: [
          {
            name: 'Page 1',
            path: '/nested/page-1',
            dataTestid: 'submenu-nested-page-1'
          },
          {
            name: 'Page 2',
            path: '/nested/page-2',
            dataTestid: 'submenu-nested-page-2'
          },
          {
            name: 'Page 3',
            path: '/nested/page-3',
            dataTestid: 'submenu-nested-page-3'
          },
          {
            name: 'Page 4',
            path: '/nested/page-4',
            dataTestid: 'submenu-nested-page-4'
          },
          {
            name: 'Page 5',
            path: '/nested/page-5',
            dataTestid: 'submenu-nested-page-5'
          }
        ],
        separator: true
      },
      {
        name: 'unocss.dev',
        path: 'https://unocss.dev/'
      },
      {
        name: 'fontawesome.com',
        path: 'https://fontawesome.com/search'
      },
      {
        name: 'iconify.design',
        path: 'https://icon-sets.iconify.design'
      },
      {
        name: 'icones',
        path: 'https://icones.js.org/'
      },
      {
        name: 'undraw.co',
        path: 'https://undraw.co/illustrations'
      },
      {
        name: 'vuejs.org',
        path: 'https://vuejs.org/'
      },
      {
        name: 'vitejs.dev',
        path: 'https://vitejs.dev/'
      }
    ]
  }
]

const appList = [
  {
    name: 'APP 1',
    path: 'https://www.example.com'
  },
  {
    name: 'APP 2',
    path: 'https://www.example.com'
  },
  {
    name: 'APP 3',
    path: 'https://www.example.com'
  },
  {
    name: 'APP 4',
    path: 'https://www.example.com'
  }
]
```

## Automated Test Guide

If you pass a `data-testid` to the `appMenu`, it will automatically generate unique `data-testid` attributes for testing:

### Gherkin Scenario

```feature
When I click sidebar menu "menu-nested-page"
When I click sidebar menu "submenu-nested-page-1"
```

### Step Definition

```ts
When('I click sidebar menu {string}', (selector: string) => {
  cy.get(`[data-testid="${selector}"]`).click()
})
```
