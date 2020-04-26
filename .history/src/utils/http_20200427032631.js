// 自定义开发插件
import axios from 'axios'
import { getAccessToken } from '@/utils/auth'
const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  axios.defaults.baseURL = process.env.VUE_APP_BASE_API
  axios.defaults.timeout = 3000
  // 请求拦截器
  axios.interceptors.request.use(
    config => {
      // 从cookie中拿出登录时候存放的访问token
      const accessToken = getAccessToken()
      if (accessToken) {
        config.headers['Authorization'] = accessToken
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  // 响应拦截
  axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      // Do something with response error
      return Promise.reject(error)
    }
  )
  Vue.prototype.$http = axios
}
export default MyHttpServer
