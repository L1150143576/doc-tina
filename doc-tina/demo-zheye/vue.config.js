const path = require('path')

module.exports = {
  // 引入 babel-polyfill
  configureWebpack: config => {

    const { resolve } = config
    const { alias } = resolve

  },
  productionSourceMap: false,
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 600,
      poll: 1000
    },
    proxy: {
      '/dev': {
        target: 'http://api.vikingship.xyz',
        changeOrigin: true,
        pathRewrite: {
          '^/dev': ''
        }
      },
      '/portal/file': {
        target: 'http://192.168.22.92',
        changeOrigin: true,
        pathRewrite: {
          '^/portal/file': ''
        }
      },
      '/prod': {
        target: 'https://work.dyg.com.cn',
        secure: true, // https
        changeOrigin: true,
        pathRewrite: {
          '^/prod': ''
        }
      }
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(path.join(__dirname, '.', 'src/assets/svgicon')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      // 需要全局导入的less
      patterns: [path.resolve(__dirname, 'src/styles/theme.less')]
    })
}
