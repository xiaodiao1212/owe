const path = require("path")
// 引入等比适配插件
const pxtorem = require('postcss-pxtorem')

// 配置基本大小
const postcss = pxtorem({
  rootValue: 15.2,
  unitPrecision: 5,
  propList: ['*'],
  // selectorBlackList: [/^p/],
  selectorBlackList: ['.layout', '.body'],
  replace: true,
  mediaQuery: false,
  minPixelValue: 6
})

const utils = {
  resolve: (dir) => {
    return path.join(__dirname, dir)
  },
  assetsPath: (_path) => {
    return path.posix.join('', _path)
  }
}
// 允许对内部的 webpack 配置进行更细粒度的修改。
const chainWebpack = config => {
  // 命名
  config.resolve.alias
    .set('assets', utils.resolve('src/assets'))
  // 打包文件带hash
  // config.output.filename('[name].[hash].js').end()
  // 覆盖原 font 打包机制，所有的 font 不做处理
  config.module.rule('fonts').use('url-loader').tap(() => { })
  config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          console.log(options)
          // 修改它的选项...
          return options
        })
}

module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  chainWebpack,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
  // css: cssConfig
}
