import Vue from 'vue'
import VueRouter from 'vue-router'
//当我们重复点击路由导航菜单的时候控制台会报错，错误的缘由是因为 vue-router 版本太新 解决办法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/404',
    component: () => import('@/views/404/index')
  },
  {
    path: '/',
    redirect: '/home',
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
      },
      {
        path: '/type',
        name: 'type',
        component: () => import('@/views/type/index')
      },
      {
        path: '*',
        redirect: '/404',
        hidden: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
