const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack');
const path = require('path')

module.exports = {
    mode: 'production',
    module:{
        rules: [
            {
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			}
        ]
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