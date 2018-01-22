
var webpack = require('webpack');
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './src/index.js'
  ],
  output: {
    //path: __dirname,
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true
    })
		//new ExtractTextPlugin('styles.css') // only for production
  ],
  module: {
		loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
			  test: /\.(jpg|png|svg|gif)$/,
			  use: {
			    loader: "url-loader",
			    options: {
			      limit: 25000,
			    },
			  },
			},
			{
			  test: /\.(pdf)$/,
			  loader: 'file-loader?name=[path][name].[ext]'
			},
      {
			  test: /\.css$/,
			  loader: 'style-loader'
			}, {
			  test: /\.css$/,
			  loader: 'css-loader',
			  query: {
			    modules: true,
			    localIdentName: '[name]__[local]___[hash:base64:5]'
			  }
			}
    ]
  }
};
