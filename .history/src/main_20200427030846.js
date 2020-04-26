import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局配置样式
import '@/assets/scss/reset.scss'
// 引入icon库
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
Vue.config.productionTip = false
// 第三方包
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
