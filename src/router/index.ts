import { createRouter, createWebHistory } from 'vue-router'

const mainRoutes = {
  path: '/',
  component: () => import('@/layouts/app-layout.vue'),
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('@/pages/home.vue')
    },
    {
      path: 'page1',
      component: () => import('@/pages/page1.vue')
    },
    {
      path: 'page2',
      component: () => import('@/pages/page2.vue')
    }
  ]
}

const templateRoutes = {
  path: '/template',
  component: () => import('@/layouts/app-layout.vue'),
  children: [
    {
      path: '',
      component: () => import('@/pages/template.vue')
    },
    {
      path: 'components',
      children: [
        {
          path: 'accordion',
          component: () => import('@/pages/components/accordion.vue')
        },
        {
          path: 'alert',
          component: () => import('@/pages/components/alert.vue')
        },
        {
          path: 'avatar',
          component: () => import('@/pages/components/avatar.vue')
        },
        {
          path: 'badge',
          component: () => import('@/pages/components/badge.vue')
        },
        {
          path: 'breadcrumb',
          component: () => import('@/pages/components/breadcrumb.vue')
        },
        {
          path: 'button',
          component: () => import('@/pages/components/button.vue')
        },
        {
          path: 'button-group',
          component: () => import('@/pages/components/button-group.vue')
        },
        {
          path: 'card',
          component: () => import('@/pages/components/card.vue')
        },
        {
          path: 'collapse',
          component: () => import('@/pages/components/collapse.vue')
        },
        {
          path: 'divider',
          component: () => import('@/pages/components/divider.vue')
        },
        {
          path: 'dropdown',
          component: () => import('@/pages/components/dropdown.vue')
        },
        {
          path: 'mask',
          component: () => import('@/pages/components/mask.vue')
        },
        {
          path: 'modal',
          component: () => import('@/pages/components/modal.vue')
        },
        {
          path: 'notification',
          component: () => import('@/pages/components/notification.vue')
        },
        {
          path: 'popover',
          component: () => import('@/pages/components/popover.vue')
        },
        {
          path: 'progress',
          component: () => import('@/pages/components/progress.vue')
        },
        {
          path: 'spinner',
          component: () => import('@/pages/components/spinner.vue')
        },
        {
          path: 'steps',
          component: () => import('@/pages/components/steps.vue')
        },
        {
          path: 'table',
          component: () => import('@/pages/components/table.vue')
        },
        {
          path: 'tabs',
          component: () => import('@/pages/components/tabs.vue')
        },
        {
          path: 'timeline',
          component: () => import('@/pages/components/timeline.vue')
        },
        {
          path: 'treeview',
          component: () => import('@/pages/components/treeview.vue')
        }
      ]
    },
    {
      path: 'forms',
      children: [
        {
          path: 'autocomplete',
          component: () => import('@/pages/forms/autocomplete.vue')
        },
        {
          path: 'checkbox',
          component: () => import('@/pages/forms/checkbox.vue')
        },
        {
          path: 'datepicker',
          component: () => import('@/pages/forms/datepicker.vue')
        },
        {
          path: 'input-group',
          component: () => import('@/pages/forms/input-group.vue')
        },
        {
          path: 'input-mask',
          component: () => import('@/pages/forms/input-mask.vue')
        },
        {
          path: 'input-text',
          component: () => import('@/pages/forms/input-text.vue')
        },
        {
          path: 'radio',
          component: () => import('@/pages/forms/radio.vue')
        },
        {
          path: 'radio-group',
          component: () => import('@/pages/forms/radio-group.vue')
        },
        {
          path: 'range',
          component: () => import('@/pages/forms/range.vue')
        },
        {
          path: 'select',
          component: () => import('@/pages/forms/select.vue')
        },
        {
          path: 'switch',
          component: () => import('@/pages/forms/switch.vue')
        },
        {
          path: 'textarea',
          component: () => import('@/pages/forms/textarea.vue')
        },
        {
          path: 'file-upload',
          component: () => import('@/pages/forms/file-upload.vue')
        }
      ]
    }
  ]
}

const routes = [mainRoutes, templateRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, _from, savedPosition) {
    // Returning the savedPosition will result in a native-like behavior when navigating with back/forward buttons:
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
