const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(d.ts|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|pdf|ico)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
            limit: 30000,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      process: {
        argv: JSON.stringify(process.argv),
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          mode: JSON.stringify(process.env.mode ? process.env.mode : 'production'),
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, '.'), 'node_modules'],
    alias: {
      '@': path.resolve(__dirname, './'),
      '@config': path.resolve(__dirname, 'config/'),
      '@image': path.resolve(__dirname, 'src/public/images/'),
      '@src': path.resolve(__dirname, 'src/'),
      '@comp': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/stores/'),
      '@util': path.resolve(__dirname, 'src/utils/'),
      '@hook': path.resolve(__dirname, 'src/hooks/'),
      '@router': path.resolve(__dirname, 'src/routers/'),
      '@page': path.resolve(__dirname, 'src/pages/'),
      '@layout': path.resolve(__dirname, 'src/layouts/'),
      '@constant': path.resolve(__dirname, 'src/constants/'),
      '@interface': path.resolve(__dirname, 'src/interfaces/'),
    },
  },
}