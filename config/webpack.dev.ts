import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as helpers from './helpers';
import commonConfig from './webpack.common';

const config: webpack.Configuration = webpackMerge(commonConfig, {
  mode: 'development',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    port: 3000,
    compress: true,
    overlay: {
      warnings: false,
      errors: true
    }
  }
});

export default config;
