import router from './router'
import NProgress from 'nprogress'
import store from '@/store'

router.beforeEach(async (to, from, next) => {
  NProgress.start()
})
