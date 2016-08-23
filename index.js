var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();
// require('./index')(app)

// module.exports = function (app) {

  app.get('/', function (req, res, next) {
    res.render('index.html')
  });

// };


console.log("Hello Spyder!!")