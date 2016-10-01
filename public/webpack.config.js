/**
 * Created by showzyl on 16/9/22.
 */

'use strict';

const path = require('path');
const process = require('process');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');


const isDev = process.env.NODE_ENV === 'dev';
//console.log(isDev);

const devTool = isDev ? 'source-map' : '';
//console.log(devTool);

let webpackConf = {
  isDev: isDev,
  entry: [
    './main.js'
  ],
  devtool: devTool,
  output: {
    // 输出文件名配置
    filename: '[name].[chunkhash:8].js',
    // 输出路径
    path: path.join(__dirname + '/dist/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /img/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    // 生成`html`文件
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]

};

if(!isDev){
  // `压缩js`
  webpackConf.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      except: ['$super', '$', 'exports', 'require']
    })
  );

  // `生产环境不报错`
  webpackConf.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  );
}

//console.log(webpackConf.plugins.length);

module.exports = webpackConf;