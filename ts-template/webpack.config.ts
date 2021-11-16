import path from'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

module.exports = {
  target: 'node',
  entry: './src/index.ts',
  // mode: 'production',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false, // webpack拼装的代码不要箭头函数
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义的环境
              presets:[
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      "chrome": "35", // 要兼容目标的浏览器
                      // "ie": "11"
                    },
                    "corejs": "3", // 指定corejs的版本
                    "useBuiltIns": "usage", // 使用corejs的方式 "usage" 表示按需加载
                  }
                ]
              ]
            }
          },
          'ts-loader' // async/await Promise 转换不了 需babel
        ],
        exclude: /node_modules/
      }
    ]
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
