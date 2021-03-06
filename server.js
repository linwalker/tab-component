var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

var webpackDevOptions = {
  noInfo: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

app.use(require('webpack-dev-middleware')(compiler, webpackDevOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(4005, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('listening at http://localhost:4000');
})