
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  //devtool: 'cheap-module-eval-source-map', /*warning: this kills the memory */
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    publicPath: './'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
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
        loader: "babel-loader",
        query: {
          presets: ['es2015', 'react', [ 'env', {
            targets: { node: 'current' }
          } ]]
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
