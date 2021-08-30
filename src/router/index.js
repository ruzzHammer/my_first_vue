import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cases.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
