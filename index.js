var express = require('express')
  , http = require('http')
  , path = require('path');

module.exports = function (app) {

  app.get('/', function (req, res, next) {
    res.render('index')
  });

};


console.log("Hello Spyder!!")