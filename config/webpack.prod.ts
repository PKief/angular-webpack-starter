import * as webpack from 'webpack';
import * as webpackMerge from 'webpack-merge';
import * as helpers from './helpers';
import commonConfig from './webpack.common';

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const config: webpack.Configuration = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
  ]
});

export default config;
