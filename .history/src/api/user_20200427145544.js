import http from '@/utils/http' // 自定义全局axios
// 用户登录
export function login(loginForm) {
  return this.$http.post('/user/login', loginForm)
}
