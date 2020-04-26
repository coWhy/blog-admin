import cookie from 'js-cookie'
export default {
  state: {
    accessToken: '', // 访问token
    refreshToken: '', // 刷新token
    username: '', // 用户名
    avatar: '', // 头像
    isAdmin: '' // 是否是管理员
  },
  mutations: {
    // 保存accessToken使用
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken
      cookie.set('accessToken', accessToken)
    },
    // 保存 refreshToken
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken
    },
    // 保存用户名
    setUsername(state, username) {
      state.username = username
    },
    //保存头像
    setAvatar(state, avatar) {}
  }
}
