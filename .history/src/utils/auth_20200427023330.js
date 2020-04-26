import cookie from 'js-cookie'
// 获取访问token
export function getAccessToken() {
  return cookie.get('accessToken')
}
