import http from '@/utils/http'
// 用户登录
export function login(loginForm) {
  return http.post('/user/login', loginForm)
}
