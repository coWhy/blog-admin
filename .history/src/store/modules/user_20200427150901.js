import cookie from 'js-cookie'
import { login } from '@/api/user'

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
    getRefreshToken(state) {
      state.refreshToken = cookie.get('refreshToken')
    },
    // 保存用户名
    setUsername(state, username) {
      state.username = username
      cookie.set('username', username)
    },
    getUsername(state) {
      state.username = cookie.get('username')
    },
    //保存头像
    setAvatar(state, avatar) {
      state.avatar = avatar
      cookie.set('avatar', avatar)
    },
    getAvatar(state) {
      state.avatar = cookie.get('avatar')
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
  },
  actions: {
    // 用户登录
    login({ commit }, loginForm) {
      const { username, password } = loginForm
      const res = login({})

      return new Promise((resolve, reject) => {
        login({ username: username.trim(), password: password.trim() })
          .then(res => {
            // 存入访问token 刷新token 用户部分信息
            commit('setAccessToken', res.data.accessToken)
            commit('setRefreshToken', res.data.refreshToken)
            commit('setUsername', res.data.username)
            commit('setAvatar', res.data.avatar)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
