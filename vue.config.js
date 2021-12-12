module.exports = {
  // 基本路径
  publicPath: './',

  // 输出路径
  outputDir: 'dist',

  // 静态资源
  assetsDir: './',

  // eslint-loader是否在保存时候检查
  lintOnSave: true,

  // 服务项配置
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: true,
    // 设置代理proxy
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, // 表示是否跨域，
        pathRewrite: {
          // 表示需要rewrite重写的
          '^/api': '',
        },
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'i18n',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
};
