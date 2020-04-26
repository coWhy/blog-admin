import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/index'),
    children: [
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
