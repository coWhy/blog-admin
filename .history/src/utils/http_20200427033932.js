// 自定义开发插件
import axios from 'axios'
import { getAccessToken } from '@/utils/auth'
import { MessageBox, Message } from 'element-ui'
const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  axios.defaults.baseURL = process.env.VUE_APP_BASE_API
  axios.defaults.timeout = 3000
  // 添加请求拦截器 token拦截
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
      //  此处对不同状态码 进行不同的操作 比如404 跳转页面等
      const res = response.data
      // 假如访问不成功 就返回错误信息给前端
      if (res.code && res.code !== 0) {
        Message({
          message: res.msg || '访问错误',
          type: 'error',
          duration: 5 * 1000
        })
      }

      return res
    },
    error => {
      return Promise.reject(error)
    }
  )
  Vue.prototype.$http = axios
}
export default MyHttpServer
