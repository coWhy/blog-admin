// 自定义开发插件
import axios from 'axios'
import { getAccessToken } from '@/utils/auth'

const MyHttpServer = {}

MyHttpServer.install = Vue => {
  // 基准地址

  Vue.prototype.$http = axios
}
export default MyHttpServer
