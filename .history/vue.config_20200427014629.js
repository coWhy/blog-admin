const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = '闲言博客' // page title
const port = 1002 // dev port
module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false, // 不需要生产环境的 source map（减小dist文件大小，加速构建）
  devServer: {
    open: true, // npm run serve后自动打开页面
    host: '0.0.0.0', // 匹配本机IP地址(默认是0.0.0.0)
    port: 8082, // 开发服务器运行端口号
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080', // 代理接口地址
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  },
  configureWebpack: {
    //在webpack的name字段中提供应用程序的标题，以便
    //可以在index.html中访问它来插入正确的标题。
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // 新版本sass-loader， 将data改成prependData进行配置
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
