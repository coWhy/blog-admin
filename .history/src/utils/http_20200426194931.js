import axios from 'axios'
const HttpServer = {}
HttpServer.install = Vue => {
  const service = axios.create({
    baseURL: process.env.VUE_APP_URL, //请求基础url
    timeout: 3000
  })
}
