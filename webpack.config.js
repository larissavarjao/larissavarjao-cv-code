const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebappWebpackPlugin = require('webapp-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DEV_MODE = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const FAVICON_DIR = './src/assets/favicon/favicon.png';

module.exports = {
  entry: ['./src/index.tsx'],
  mode: DEV_MODE ? 'development' : 'production',
  devtool: DEV_MODE ? 'cheap-module-eval-source-map' : '',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              configFile: DEV_MODE ? 'tsconfig.json' : 'tsconfig.deploy.json'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              includePaths: ['./src']
            }
          }
        ])
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: false,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(ttf|eot|woff)(\?v=[0-9].[0-9].[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.[hash].js'
  },
  devServer: {
    contentBase: './public',
    compress: true,
    port: PORT,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    ...(!DEV_MODE ? [new UglifyJsPlugin()] : []),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    // new CopyWebpackPlugin([{ from: 'src/index.html' }]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebappWebpackPlugin(FAVICON_DIR),
    new ImageminPlugin({
      disable: DEV_MODE,
      pngquant: {
        quality: '95-100'
      },
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
};
