const {CleanWebpackPlugtin, CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_moudels/,
        loader: "babel-loader",
        options: {presets: ["@babel/env"]},
      },
      {
        test: /\.(scss|css)/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name:"[name].[ext]?[hash]",
        },
      },
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: JSON.stringify(new Date().toLocaleString()),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin({}),
  ]
}