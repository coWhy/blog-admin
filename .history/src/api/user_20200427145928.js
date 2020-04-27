import axios from 'axios'
// 用户登录
export function login(loginForm) {
  return axios.post('/user/login', loginForm)
}
