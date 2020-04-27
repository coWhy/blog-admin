import axios from 'axios'
import { getAccessToken, getRefreshToken } from '@/utils/auth'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 3000
})

// 添加请求拦截器 token拦截
service.interceptors.request.use(
  config => {
    // 从cookie中拿出登录时候存放的访问token
    const accessToken = getAccessToken()
    const refreshToken = getRefreshToken()
    if (accessToken && refreshToken) {
      config.headers['Authorization'] = accessToken
      config.headers['RefreshToken'] = refreshToken
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
    // 假如访问不成功 就返回错误信息给前端 后端访问成功码为 0
    switch (res.code) {
      case 0:
        Message({
          message: res.msg,
          type: 'success',
          duration: 5 * 1000
        })
        break
      case 4010001:
        MessageBox.confirm(
          '您已经登出，您可以取消以停留在此页面，或再次登录',
          '确认注销',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.commit('clearTokens')
          location.reload()
        })
        break
      default:
        Message({
          message: res.msg || '访问错误',
          type: 'error',
          duration: 5 * 1000
        })
        break
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
