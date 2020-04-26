// 自定义开发插件
import axios from 'axios'
import { getAccessToken } from '@/utils/auth'
const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  axios.defaults.baseURL = Vue.prototype.$http = axios

  const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // /api
    timeout: 3000
  })
  // 请求拦截器
  service.interceptors.request.use(config => {
    const accessToken = getAccessToken()
  })
}
export default MyHttpServer
