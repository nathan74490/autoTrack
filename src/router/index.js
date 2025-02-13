import PadgeHome from '@/views/PadgeHome.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PadgeHome',
      component: PadgeHome,
    },
    {
      path: '/infoRecherche',
      name: 'infoRecherche',
      component: () => import('@/views/ResearchInfo.vue')
    },
    {
      path: '/Search',
      name: 'Search',
      component: () => import('@/views/Search.vue')
    },
    {
      path: '/likepadge',
      name: 'likepadge',
      component: () => import('@/likepadge.vue'),
    },
    {
      path: '/PadgeLogin',
      name: 'PadgeLogin',
      component: () => import('@/PadgeLogin.vue'),
    },
    {
      path: '/ValueResearch',
      name: 'ValueResearch',
      component: () => import('@/views/ValueResearch.vue'),
    },
    {
      path: '/Assurance',
      name: 'Assurance',
      component: () => import('@/Assurance.vue')
    },
    {
      path: '/Entretien',
      name: 'Entretien',
      component: () => import('@/Entretien.vue')
    },
    {
      path: '/SparePartsPages',
      name: 'SparePartsPages',
      component: () => import('@/SparePartsPages.vue')
    },
  ],
})

export default router
