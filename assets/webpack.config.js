const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, 'js/app.js'),
    path.join(__dirname, 'scss/app.scss')
  ],
  output: {
    path: path.join(__dirname, '../priv/static'),
    filename: 'js/app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['priv/static'], { root: path.join(__dirname, '..') }),
    new MiniCSSExtractPlugin({
      filename: 'css/app.css'
    }),
    new CopyWebpackPlugin([{ from: path.join(__dirname, 'static') }])
  ],
  resolve: {
    alias: {
      phoenix: path.join(__dirname, '../deps/phoenix/priv/static/phoenix.js'),
      phoenix_html: path.join(__dirname, '../deps/phoenix_html/priv/static/phoenix_html.js')
    }
  }
};
