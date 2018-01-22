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
// "build": "NODE_ENV=production webpack --config ./webpack.prod.config.js --progress --colors",
// "start": "node app.js",
// "postbuild": "webpack -p --config ./webpack.prod.config.js --progress",
// "heroku-postbuild": "webpack -p --config ./webpack.prod.config.js --progress"

var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();

if (process.env.NODE_ENV !== 'production') {
  console.log('development environment');

  const compiler = webpack(config);
  const middleware = require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  });
  app.use(middleware);

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
    app.use(express.static(__dirname + '/dist'));
    app.get('*', function response(req, res) {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}


// app.use(express.static('/public', express.static(path.join(__dirname, 'public'))))
//
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

var port = process.env.PORT || 5000;
app.listen(port, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log('Server running on port: ' + port);
});
