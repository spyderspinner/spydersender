var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy')

var proxy = httpProxy.createProxyServer();
var app = express();

var isProd = process.env.NODE_ENV === 'production';
var port = isProd ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

if (!isProd) {
  var bundle = require('./server/bundle.js');
  bundle();
  app.all('/build/*', function(req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
}

proxy.on('error', function(e) {
  console.log('Could not connect to proxy...');
});

app.listen(port, function() {
  console.log('Server running on port ' + port);
  console.log('Hello Spyder');
});






// console.log("Hello Spyder!!");

// var express = require('express');
  // , http = require('http');
  // , path = require('path');

// var app = express();

// app.set('title', 'SpinnerSender');
// app.set('views', __dirname + '/views'); // general config
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.listen(3000, function () {
//   console.log('Listening on port!');
// });
