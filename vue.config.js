process.env.VUE_APP_VERSION = require('./package.json').version;

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

  configureWebpack: {},

  pluginOptions: {
    gitDescribe: {
      variableName: 'GIT_DESCRIBE',
    },
  },
};
