import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
