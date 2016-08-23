console.log("Hello Spyder!!");

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.get('/', function (req, res) {
  res.send('See me here!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});