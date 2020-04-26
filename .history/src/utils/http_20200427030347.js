// 自定义开发插件
import axios from 'axios'
import { getAccessToken } from '@/utils/auth'

const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // /api
    timeout: 3000
  })
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
      //  此处对不同状态码 进行不同的操作 比如404 跳转页面等
      const res = response.data
      console.log(`响应信息${res}`)
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )
  Vue.prototype.$http = axios
}
export default MyHttpServer
