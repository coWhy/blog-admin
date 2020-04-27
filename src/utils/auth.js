import cookie from 'js-cookie'
// 获取访问token
export function getAccessToken() {
  return cookie.get('accessToken')
}
export function getRefreshToken() {
  return cookie.get('refreshToken')
}
// 获取用户名
export function getUsername() {
  return cookie.get('username')
}
// 获取用户头像
export function getAvatar() {
  return cookie.get('avatar')
}
