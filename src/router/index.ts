import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/app.vue'),
      children: [
        {
          path: '',
          redirect: '/example/home'
        }
      ]
    },
    {
      path: '/example',
      component: () => import('../layouts/app.vue'),
      children: [
        {
          path: '',
          redirect: '/example/home'
        },
        {
          path: 'home',
          component: () => import('@/pages/home.vue')
        },
        {
          path: 'page-1',
          component: () => import('@/pages/page-1.vue')
        },
        {
          path: 'page-2',
          component: () => import('@/pages/page-2.vue')
        },
        {
          path: 'websocket',
          component: () => import('@/pages/websocket.vue')
        },
        {
          path: 'nested/page-1',
          component: () => import('@/pages/nested/page-1.vue')
        },
        {
          path: 'nested/page-2',
          component: () => import('@/pages/nested/page-2.vue')
        },
        {
          path: 'nested/page-3',
          component: () => import('@/pages/nested/page-3.vue')
        },
        {
          path: 'nested/page-4',
          component: () => import('@/pages/nested/page-4.vue')
        },
        {
          path: 'nested/page-5',
          component: () => import('@/pages/nested/page-5.vue')
        }
      ]
    }
  ]
})

export default router
