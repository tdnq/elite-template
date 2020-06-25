/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');

process.env.NODE_ENV = "production";
const path = require("path");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              syntax: 'postcss-scss',
              plugins: [
                require('autoprefixer')
              ]
            },
          }
        ],
      },
    ]
  }
});