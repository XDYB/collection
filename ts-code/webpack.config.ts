import path from'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  entry: './src/index.ts',
  // mode: 'production',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
  ]
};
