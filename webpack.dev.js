/* eslint-disable import/no-extraneous-dependencies */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = [
  merge(
    common,
    {
      mode: 'development',
      devtool: 'source-map',
      plugins: [
        new ForkTsCheckerWebpackPlugin(),
      ],
      optimization: {
        minimize: false,
        emitOnErrors: true,
      },
      devServer: {
        host: 'localhost',
        port: 8000,
        open: true,
        compress: true,
        historyApiFallback: true,
        hot: true,
        liveReload: true,
        client: {
          logging: 'log',
          // progress: true,
        },
      },
    },
  ),
];
