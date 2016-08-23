console.log("Hello Spyder!!");

var express = require('express')
  , http = require('http')
  , path = require('path');
// require('./index')(app)

// module.exports = function (app) {

  // app.get('/', function (req, res, next) {
  //   res.render('index.html')
  // });

// };
var app = express();

app.get('/', function (req, res) {
  res.send('See me here!');
});