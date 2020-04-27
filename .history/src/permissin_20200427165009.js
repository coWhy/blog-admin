import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getAccessToken } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress配置
const whiteList = ['/login'] // 没有重定向白名单

router.beforeEach(async (to, from, next) => {
  // 开始进度条
  NProgress.start()
  // 确定用户是否已登录
  const hasAccessToken = getAccessToken()
  console.log(hasAccessToken)
  if (hasAccessToken) {
    if (to.path === '/login') {
      // 如果已登录，则重定向到主页
      next({ path: '/' })
      NProgress.done()
    }
  } else {
    /* 没有令牌*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单，直接去
      next()
    } else {
      // 没有访问权限的其他页面被重定向到登录页面。
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
