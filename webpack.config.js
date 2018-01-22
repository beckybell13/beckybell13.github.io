/*
 * ./webpack.config.js
 */

// TODO: will need to add a css loader eventually
//		see docs: https://webpack.github.io/docs/list-of-loaders.html


// const path = require('path');
//
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
// 	template: './src/index.html',
// 	filename: 'index.html',
// 	inject: 'body'
// });
//
// module.exports = {
// 	entry: './src/index.js',
// 	output: {
// 		path: path.resolve('dist'),
// 		filename: 'index_bundle.js'
// 	},
// 	module: {
// 		loaders: [
// 			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
// 			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
// 			{ test: /\.css$/, loader: 'style-loader!css-loader', include: /flexboxgrid/ }
// 		]
// 	},
// 	plugins: [HtmlWebpackPluginConfig]
// }

// const path = require('path')
// const webpack = require('webpack')
//
// module.exports = {
//   entry: ['./src/index.js', 'webpack-hot-middleware/client', 'webpack/hot/dev-server'],
//   output: {
//     path: __dirname,
//     filename: 'bundle.js',
//     publicPath: '/src/assets/'
//   },
//   module: {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         include: path.join(__dirname, 'src'),
//         exclude: /node_modules/,
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
// };

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?quiet=true',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
			  test: /\.css$/,
			  loader: 'style-loader'
			}, {
			  test: /\.css$/,
			  loader: 'css-loader',
			  query: {
			    modules: true,
			    localIdentName: '[name]__[local]___[hash:base64:5]'
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
			}
    ]
  }
};
