import cookie from 'js-cookie'

export default getAccessToken(){
  return cookie.get('accessToken')
}