// const { gitDescribe, gitDescribeSync } = require('git-describe');

// // make current commit hash publicly available
// process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash;

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

  pluginOptions: {
    gitDescribe: {
      variableName: 'GIT_DESCRIBE',
    },
  },
};
