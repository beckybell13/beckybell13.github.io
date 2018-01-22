
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //devtool: 'cheap-module-eval-source-map', /*warning: this kills the memory */
  entry: [
    // './src/index.js'
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    // path: path.join(__dirname, 'public'),
    // publicPath: '/public/',
    // filename: 'bundle.js'
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name]-[hash].min.js',
    filename: '[name].min.js',
    // publicPath: '/'
    publicPath: 'beckybell13.github.io/personal-website/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
        minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // NODE_ENV: JSON.stringify('production')
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
		//new ExtractTextPlugin('styles.css') // only for production
  ],
  module: {
    rules: [
			{
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
			{
        test: /.jsx?$/,
        exclude: /node_modules/,
				use: {
          loader: "babel-loader"
        }
      },
			{
				test: /\.css$/,
				use: {
					loader: 'style-loader'
				}
			},
			{
				test: /\.(pdf)$/,
				use: {
					loader: 'file-loader?name=[path][name].[ext]'
				}
			},
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader'
				}
			},
			{
				test: /\.(jpg|png|svg|gif)$/,
				use: {
					loader: "url-loader",
				}
			}
		],
		// loaders: [
    //   {
    //     test: /.jsx?$/,
    //     loader: 'babel-loader',
    //     include: path.join(__dirname, 'src'),
    //     exclude: /node_modules/,
    //     query: {
    //       presets: ['es2015', 'react']
    //     }
    //   },
    //   {
		// 	  test: /\.(jpg|png|svg|gif)$/,
		// 	  use: {
		// 	    loader: "url-loader",
		// 	    options: {
		// 	      limit: 25000,
		// 	    },
		// 	  },
		// 	},
		// 	{
		// 	  test: /\.(pdf)$/,
		// 	  loader: 'file-loader?name=[path][name].[ext]'
		// 	},
    //   {
		// 	  test: /\.css$/,
		// 	  loader: 'style-loader'
		// 	}, {
		// 	  test: /\.css$/,
		// 	  loader: 'css-loader',
		// 	  query: {
		// 	    modules: true,
		// 	    localIdentName: '[name]__[local]___[hash:base64:5]'
		// 	  }
		// 	}
    // ]
  }
};
