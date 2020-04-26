// 自定义开发插件
import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址
  axios.defaults.baseURL = process.env.VUE_APP_BASE_API
  Vue.prototype.$http = axios
}
export default MyHttpServer
