import cookie from 'js-cookie'
// 获取访问token
export default getAccessToken(){
  return cookie.get('accessToken')
}