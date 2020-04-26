import cookie from 'js-cookie'
export default {
  state: {
    accessToken: '', // 访问token
    refreshToken: '', // 刷新token
    username: '', // 用户名
    avatar: '' // 头像
  },
  mutations: {
    // 保存accessToken使用
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken
      cookie.set('accessToken', accessToken)
    },
    getAccessToken(state) {
      state.accessToken = cookie.get('accessToken')
    },
    // 保存 refreshToken
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken
      cookie.set('refreshToken', refreshToken)
    },
    // 保存用户名
    setUsername(state, username) {
      state.username = username
      cookie.set('username', username)
    },
    //保存头像
    setAvatar(state, avatar) {
      state.avatar = avatar
      cookie.set('avatar', avatar)
    },
    // 清除tokens 退出时候使用
    clearTokens(state) {
      state.accessToken = ''
      state.refreshToken = ''
      state.username = ''
      state.refreshToken = ''
      cookie.remove('accessToken')
      cookie.remove('refreshToken')
      cookie.remove('username')
      cookie.remove('avatar')
    }
  }
}
