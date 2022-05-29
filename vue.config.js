const path = require('path');  //导入 path 模块
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /* 进行 webpack 配置 */
  chainWebpack: config => {
    /* 配置别名 */
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('css', resolve('src/assets/css'))
      .set('images', resolve('src/assets/images'))
      .set('components', resolve('src/components'))
      .set('plugins', resolve('src/plugins'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('views', resolve('src/views'))
      .set('Layout', resolve('src/views/Layout'))
      .set('Login', resolve('src/views/Login'))
      .set('network', resolve('src/network'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8989',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
