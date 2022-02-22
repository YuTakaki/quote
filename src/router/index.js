import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView')
  },
  {
    path: '/authors',
    name: 'authors',
    component: () => import('../views/AuthorView')
  },
  {
    path: '/authors/:slug',
    name: 'authors-profile',
    component: () => import('../views/AuthorProfileView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
