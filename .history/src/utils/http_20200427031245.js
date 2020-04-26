// 自定义开发插件
import axios from 'axios'
import { getAccessToken } from '@/utils/auth'

// 基准地址
const service = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/api" : "" //开发环境api代理

  timeout: 3000
})
// 请求拦截器
service.interceptors.request.use(
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
service.interceptors.response.use(
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
export default service
