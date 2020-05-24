module.exports = {
  transpileDependencies: ['vuetify'],
  chainWebpack: (config) => {
    config.module
      .rule('webWorker')
      .post()
      .test(/\.worker\.(j|t)s$/)
      .use('worker-loader')
      .loader('worker-loader');
  },
};
