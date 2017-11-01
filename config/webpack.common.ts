import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as helpers from './helpers';

const config: webpack.Configuration = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular-router-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        use: 'raw-loader'
      },
      {
        test: /\.scss$/,
        exclude: [/\.global\.scss$/],
        use: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.global\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    // solution found: https://github.com/angular/angular/issues/11580#issuecomment-327338189
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators for Windows and MacOS
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

export default config;
