const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name]_[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    environment: {
      arrowFunction: false, // webpack拼装的代码不要箭头函数
    }
  },
  plugins: [
    new CleanWebpackPlugin({}),
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  }
};
