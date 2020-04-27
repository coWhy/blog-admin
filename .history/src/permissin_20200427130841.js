import router from './router'
import NProgress from 'nprogress'
import store from '@/store'

router.beforeEach((to, from, next) => {
  NProgress.start() //to and from are Route Object,next() must be called to resolve the hook}
})
