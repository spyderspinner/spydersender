var express = require('express')
  , http = require('http')
  , path = require('path');

app.get('/', index.html);

exports.index = function(req, res){
  res.sendfile('index.html');
};

console.log("Hello Spyder!!")