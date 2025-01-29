import PadgeHome from '@/views/PadgeHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'myhome',
      component: PadgeHome,
    },
    {
      path: '/Search',
      name: 'Search',
      component: () => import('../views/Search.vue'),
    },
    {
      path: '/infoRecherche',
      name: 'infoRecherche',
      component: () => import('@/views/researchInfo.vue')
    },
    {
      path: '/modificationinfo',
      name: 'modificationinfo',
      component: () => import('../views/InfoModification.vue'),
    },
  ],
})

export default router
