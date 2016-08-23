var express = require('express')
  , http = require('http')
  , path = require('path');

<!-- app.get('/', index.html);
 -->
<!-- exports.index = function(req, res){
  res.sendfile('index.html');
};
 -->
module.exports = function (app) {

  app.get('/', function (req, res, next) {
    res.render('index')
  });

}


console.log("Hello Spyder!!")