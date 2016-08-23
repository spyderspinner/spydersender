var express = require('express')
  , http = require('http')
  , path = require('path');

app = module.exports = express.createServer()

app.get('/', index.html);

exports.index = function(req, res){
  res.sendfile('index.html');
};

console.log("Hello Spyder!!")