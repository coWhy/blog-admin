import http from '@/utils/http'
// 用户登录
export function login(loginForm) {
  return http.post('/user/login', loginForm)
}

export function logout() {
  return http.get('/user/logout')
}
