// const Server = require('./server.js');
// const webpack = require('webpack');
//
// let config;
// const port = (process.env.PORT || 9000);
// const app = Server.app();
//
// if (process.env.NODE_ENV === 'development') {
//   const webpackDevMiddleware = require('webpack-dev-middleware');
//   const webpackHotMiddleware = require('webpack-hot-middleware');
//   config = require('../webpack.config.js');
//   const compiler = webpack(config);
//
//   app.use(webpackHotMiddleware(compiler))
//   app.use(webpackDevMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPathdist
//   }))
// }
//
//
// app.listen(port);
// console.log(`Listening at http://localhost:${port}`);

var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log('Server running on port: 5000');
});
