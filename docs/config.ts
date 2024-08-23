import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { type DefaultTheme, defineConfig } from 'vitepress'

import { version } from '../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Papp',
  description: 'Pointhub App Components',
  cleanUrls: true,
  srcDir: './src',
  base: '/library/papp/',
  vite: {
    plugins: [Unocss()],
    resolve: {
      alias: {
        '@point-hub/papp': resolve(__dirname, '../dist/index.js') // to resolve @ inside docs
      }
    }
  },
  sitemap: {
    hostname: 'https://dev.pointhub.net'
  },
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: nav(),
    sidebar: {
      '/docs/': { base: '/docs/', items: sidebarDocs() },
      '/contribution-guide/': { base: '/contribution-guide/', items: sidebarContributionGuide() }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/point-hub/papp' }],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Pointhub'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Docs', link: '/docs/introduction' },
    { text: 'Contribution Guide', link: '/contribution-guide/getting-started/introduction' },
    {
      text: 'v' + version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/point-hub/papp/commits/main/'
        },
        {
          text: 'Contributing',
          link: 'https://dev.pointhub.net'
        }
      ]
    }
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Quickstart', link: 'quickstart' }
      ]
    },
    {
      text: 'Components',
      collapsed: true,
      items: [
        { text: 'Accordion', link: 'components/accordion' },
        { text: 'Alert', link: 'components/alert' },
        { text: 'Avatar', link: 'components/avatar' },
        { text: 'Badge', link: 'components/badge' },
        { text: 'Breadcrumb', link: 'components/breadcrumb' },
        { text: 'Button', link: 'components/button' },
        { text: 'Card', link: 'components/card' },
        { text: 'Divider', link: 'components/divider' },
        { text: 'Dropdown', link: 'components/dropdown' },
        { text: 'Icon', link: 'components/icon' },
        { text: 'Mask', link: 'components/mask' },
        { text: 'Modal', link: 'components/modal' },
        { text: 'Pagination', link: 'components/pagination' }, // TODO: fix export function
        { text: 'Popover', link: 'components/popover' }, // TODO: fix export function
        { text: 'Progress', link: 'components/progress' },
        { text: 'Spinner', link: 'components/spinner' },
        { text: 'Steps', link: 'components/steps' },
        { text: 'Table', link: 'components/table' }, // TODO: fix export function
        { text: 'Tabs', link: 'components/tabs' },
        { text: 'Timeline', link: 'components/timeline' },
        { text: 'Toast', link: 'components/toast' },
        { text: 'Tooltip', link: 'components/tooltip' },
        { text: 'Treeview', link: 'components/treeview' }
      ]
    },
    {
      text: 'Forms',
      collapsed: true,
      items: [
        { text: 'Autocomplete', link: 'forms/autocomplete' },
        { text: 'Checkbox', link: 'forms/checkbox' },
        { text: 'Choosen', link: 'forms/choosen' },
        { text: 'Datepicker', link: 'forms/datepicker' },
        { text: 'File Upload', link: 'forms/file-upload' },
        { text: 'Form', link: 'forms/form' },
        { text: 'Input Mask', link: 'forms/input-mask' },
        { text: 'Input Number', link: 'forms/input-number' },
        { text: 'Input', link: 'forms/input' },
        { text: 'Radio', link: 'forms/radio' },
        { text: 'Range', link: 'forms/range' },
        { text: 'Select', link: 'forms/select' },
        { text: 'Switch', link: 'forms/switch' },
        { text: 'Textarea', link: 'forms/textarea' }
      ]
    }
  ]
}

function sidebarContributionGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      items: [
        { text: 'Introduction', link: 'getting-started/introduction' },
        { text: 'Quickstart', link: 'getting-started/quickstart' },
        { text: 'Directory Structure', link: 'getting-started/directory-structure' },
        { text: 'Example', link: 'getting-started/example' },
        { text: 'Documentation', link: 'getting-started/documentation' }
      ]
    },
    {
      text: 'Maintainer',
      items: [{ text: 'Deployment', link: 'maintainer/deployment' }]
    }
  ]
}
