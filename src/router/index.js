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
  ],
})

export default router
