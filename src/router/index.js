import Search from '@/views/Search.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search,
    },
    {
      path: '/infoRecherche',
      name: 'infoRecherche',
      component: () => import('@/views/ResearchInfo.vue')
    },
    {
      path: '/InfoModification',
      name: 'InfoModification',
      component: () => import('@/views/InfoModification.vue'),
    },
    {
      path: '/BtnHome',
      name: 'BtnHome',
      component: () => import('@/views/BtnHome.vue'),
    },
    {
      path: '/BtnLike',
      name: 'BtnLike',
      component: () => import('@/views/BtnLike.vue'),
    },
    {
      path: '/BtnProfil',
      name: 'BtnProfil',
      component: () => import('@/views/BtnProfil.vue'),
    },
  ],
})

export default router
