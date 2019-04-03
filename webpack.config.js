const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const miniExtractSass = new MiniCssExtractPlugin({
  filename: 'main.css'
})
const createWithHtml = new HtmlWebpackPlugin({
  template: './index.html'
})
module.exports = {
  mode: 'development', // "production" | "development" | "none"
  entry: path.join(__dirname, 'main.js'), // string | object | array
  output: {
    // webpack 如何输出结果的相关选项
    path: path.resolve(__dirname, 'dist'), // string
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    filename: 'artTpl.js', // string [name].js
    library: 'template',
    libraryTarget: 'umd'
  },
  module: {
    // 关于模块配置
    rules: [{
      test: /\.(jpg|png|gif)$/i,
      use: ['file-loader']
    }, {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    }, {
      test: /\.tpl$/,
      loader: 'dotjs-loader',
      options: {
        varname: 'it'
      }
    }, {
      test: /\.scss|\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.json', '.art', '.css'],
    // 使用的扩展名
    alias: {}
  },
  devtool: 'source-map', // enum
  devServer: {
    port: 8088,
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    disableHostCheck: true
  },

  plugins: [createWithHtml, miniExtractSass]
}
