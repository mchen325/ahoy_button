module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
    // 禁止生成map
    productionSourceMap: false,
  // 处理自定义title
  chainWebpack: (config) => {
    config
        .plugin('html')
        .tap((args) => {
          args[0].title = process.env.VUE_APP_TITLE;
          return args;
        });
  },
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@nutui/nutui/dist/styles/index.scss";`,
            }
        },
    }
}
