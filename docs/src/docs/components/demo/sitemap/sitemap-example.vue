<script setup lang="ts">
const sitemap = {
  title: 'My Sitemap',
  subtitle: 'Version 1.0',
  homepage: {
    link: 'https://dev.pointhub.net/library/papp',
    name: 'Home',
    desc: ''
  },
  menu: [
    {
      name: 'Getting Started',
      child: [
        {
          link: '/library/papp/docs/introduction',
          name: 'Introduction'
        },
        {
          link: '/library/papp/docs/quick-start',
          name: 'Quick Start'
        }
      ]
    },
    {
      name: 'Components',
      child: [
        {
          link: '/library/papp/docs/components/accordion',
          name: 'Accordion',
          child: [
            {
              link: '/library/papp/docs/components/accordion#always-open',
              name: 'Always Open'
            },
            {
              link: '/library/papp/docs/components/accordion#using-slot',
              name: 'Using Slot'
            }
          ]
        },
        {
          link: '/library/papp/docs/components/alert',
          name: 'Alert'
        },
        {
          link: '/library/papp/docs/components/avatar',
          name: 'Avatar'
        },
        {
          link: '/library/papp/docs/components/button',
          name: 'Button'
        }
      ]
    },
    {
      name: 'Form',
      child: [
        {
          link: '/library/papp/docs/form/checkbox',
          name: 'Checkbox'
        },
        {
          link: '/library/papp/docs/form/choosen',
          name: 'Choosen'
        }
      ]
    }
  ]
}
</script>

<template>
  <Demo>
    <base-sitemap :sitemap="sitemap" />
  </Demo>
</template>
