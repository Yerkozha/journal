const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack');
const path = require('path')

module.exports = {
    mode: 'production',
    module: {
      rules: [{
          test: /\.ts$|tsx/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
          
        }]
  },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env.production'),
          }),
          new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css',
            chunkFilename: '[name].[contenthash:8].css'
        })
      ],
    devtool: 'source-map',
  };