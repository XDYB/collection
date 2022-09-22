const { merge } = require('webpack-merge');
const base = require('./webpack.base');

module.exports =  merge(base, {
  devServer: {
    compress: true,
    port: 9000,
  },
  entry: './src/index.ts',
  mode: 'development',
});
