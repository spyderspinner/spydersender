var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , firebase = require('firebase');

app.get('/', index.html);

exports.index = function(req, res){
  res.sendfile('index.html');
};

console.log("Hello Spyder!!")