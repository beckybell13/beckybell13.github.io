/*
 * ./webpack.config.js
 *
 */

var webpack = require('webpack');
var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?quiet=true',
		path.join(__dirname, 'src/index.js')
  ],
  output: {
		path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
		new HtmlWebPackPlugin({
			template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
		}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new BundleAnalyzerPlugin()
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
				test: /\.css$/,
				use: {
					loader: 'css-loader'
				}
			},
			// {
			// 	test: /\.(jpe?g|png|svg|gif)$/,
			// 	use: [
			// 		//loader: "url-loader"
      //     { loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]' },
      //     { loader: 'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false' }
			// 	]
      // }
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          'file-loader', {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
		],
  }
};
