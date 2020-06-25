/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');

process.env.NODE_ENV = 'development';
const path = require("path");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
});