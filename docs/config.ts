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
  base: '/',
  vite: {
    envDir: resolve(__dirname, '..'),
    resolve: {
      alias: {
        '@point-hub/papp': resolve(__dirname, '../src/index.ts'), // to load latest source files
        '@': resolve(__dirname, '../src') // so @ references still work inside docs
      }
    },
    plugins: [
      Unocss({
        configFile: resolve(__dirname, './uno.config.ts')
      })
    ]
  },
  sitemap: {
    hostname: 'https://dev.pointhub.net'
  },
  head: [['link', { rel: 'icon', type: 'image/png', href: '/library/papp/favicon-32x32.png' }]],
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
      copyright: 'Copyright ©2023-2025 Pointhub'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Docs', link: '/docs/introduction' },
    {
      text: 'Ecosystem',
      items: [
        { text: 'Dev Documentation', link: 'https://dev.pointhub.net/' },
        // TODO: publish this documentation before show the link
        // {
        //   text: 'Services',
        //   items: [
        //     { text: 'Auth', link: 'https://dev.pointhub.net/services/auth/' },
        //     { text: 'Storage', link: 'https://dev.pointhub.net/services/storage/' },
        //     { text: 'Mail', link: 'https://dev.pointhub.net/services/mail/' }
        //   ]
        // },
        // {
        //   text: 'Apps',
        //   items: [{ text: 'ERP', link: 'https://dev.pointhub.net/apps/erp/' }]
        // },
        {
          text: 'Libraries',
          items: [{ text: 'UI Library', link: 'https://dev.pointhub.net/library/papp' }]
        }
      ]
    },
    {
      text: 'v' + version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/point-hub/papp/commits/main/'
        },
        {
          text: 'Contributing',
          link: '/contribution-guide/getting-started/introduction'
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
      collapsed: false,
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
        { text: 'Loader', link: 'components/loader' },
        { text: 'Mask', link: 'components/mask' },
        { text: 'Modal', link: 'components/modal' },
        { text: 'Pagination', link: 'components/pagination' },
        { text: 'Popover', link: 'components/popover' },
        { text: 'Progress', link: 'components/progress' },
        { text: 'Sidebar', link: 'components/sidebar' },
        { text: 'PDF Signer', link: 'components/pdf-signer' },
        { text: 'Sitemap', link: 'components/sitemap' },
        { text: 'Spinner', link: 'components/spinner' },
        { text: 'Steps', link: 'components/steps' },
        { text: 'Table', link: 'components/table' },
        { text: 'Tabs', link: 'components/tabs' },
        { text: 'Timeline', link: 'components/timeline' },
        { text: 'Toast', link: 'components/toast' },
        { text: 'Tooltip', link: 'components/tooltip' },
        { text: 'Treeview', link: 'components/treeview' }
      ]
    },
    {
      text: 'Forms',
      collapsed: false,
      items: [
        { text: 'Checkbox', link: 'forms/checkbox' },
        { text: 'Choosen', link: 'forms/choosen' },
        { text: 'Datepicker', link: 'forms/datepicker' },
        { text: 'File Upload', link: 'forms/file-upload' },
        { text: 'Form', link: 'forms/form' },
        { text: 'Input Mask', link: 'forms/input-mask' },
        { text: 'Input Number', link: 'forms/input-number' },
        { text: 'Input', link: 'forms/input' },
        { text: 'Mention', link: 'forms/mention' },
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
