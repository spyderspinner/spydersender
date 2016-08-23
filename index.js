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

app.use('/', 'index.html');
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
//   //__dirname : It will resolve to your project folder.
// });