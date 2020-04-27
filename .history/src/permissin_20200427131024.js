import router from './router'
import NProgress from 'nprogress'
import store from '@/store'
import { getAccessToken } from '@/utils/auth'
router.beforeEach(async (to, from, next) => {
  NProgress.start()
})
