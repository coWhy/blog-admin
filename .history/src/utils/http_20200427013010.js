import axios from 'axios'
const HttpServer = {}
HttpServer.install = Vue => {
  axios.create({
    baseURL: process.env.VUE_APP_BASE_API, //请求基础url
    timeout: 3000
  })
  Vue.prototype.$http = axios
}
export default HttpServer
