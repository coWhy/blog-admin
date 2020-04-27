import router from './router'
import NProgress from 'nprogress'
import store from '@/store'
import { getAccessToken } from '@/utils/auth'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 如果携带token 
  if (getAccessToken) {
    if(to.path === '/login'){
      next({path：'/})
    }
  }
})
