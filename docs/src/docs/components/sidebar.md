---
outline: deep
---

# Sidebar

```ts
const apps: ISidebarMenu[] = [
  {
    name: 'EXAMPLE',
    path: '/',
    icon: 'https://assets.pointhub.net/assets/images/logo/primary/icon-rounded.png',
    menu: [
      {
        name: 'Home',
        path: '/home',
        dataTestid: 'menu-home'
      },
      {
        name: 'Nested Page',
        dataTestid: 'menu-nested-page',
        submenu: [
          { name: 'Page 1', path: '/nested/page-1', dataTestid: 'submenu-nested-page-1' },
          { name: 'Page 2', path: '/nested/page-2', dataTestid: 'submenu-nested-page-2' },
          { name: 'Page 3', path: '/nested/page-3', dataTestid: 'submenu-nested-page-3' },
          { name: 'Page 4', path: '/nested/page-4', dataTestid: 'submenu-nested-page-4' },
          { name: 'Page 5', path: '/nested/page-5', dataTestid: 'submenu-nested-page-5' }
        ],
        separator: true
      }
    ]
  }
]
```

## Automated Test Guide

If you pass a `data-testid` to the `<base-autocomplete>` component, it will automatically generate unique `data-testid` attributes for testing:

For example, if you set `data-testid="user-autocomplete"`, the component will generate the following attributes:

| Element               | `data-testid`                    |
| --------------------- | -------------------------------- |
| Input Field           | `user-autocomplete-input`        |
| Option with `_id = 1` | `user-autocomplete-1`            |
| Option with `_id = 2` | `user-autocomplete-2`            |
| Clear Button          | `user-autocomplete-clear-button` |

### Gherkin Scenario

```feature
When I type "Durward" into "user-autocomplete-input"
And I click autocomplete option "user-autocomplete-option-1"
And I click autocomplete clear button "user-autocomplete-clear-button"
```

### Step Definition

```ts
When('I click autocomplete input {string}', (selector: string) => {
  cy.get(`[data-testid=${selector}]`).click()
})

When('I click autocomplete clear button {string}', (selector: string) => {
  cy.get(`[data-testid=${selector}]`).click()
})

When('I type {string} into {string}', (value: string, selector: string) => {
  cy.get(`[data-testid=${selector}]`).type(value)
})
```

### Code Implementation

```vue
<script setup>
import { ref } from 'vue'

const userOptions = [
  { _id: '1', label: 'Durward Reynolds' },
  { _id: '2', label: 'Kenton Towne' },
  { _id: '3', label: 'Therese Wunsch' },
  { _id: '4', label: 'Benedict Kessler' }
]
const userSelected = ref()
</script>

<template>
  <base-autocomplete
    v-model="userSelected"
    :options="userOptions"
    data-testid="user-autocomplete"
  />
</template>
```
