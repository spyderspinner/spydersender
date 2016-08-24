console.log("Hello Spyder!!");

var express = require('express');
  // , http = require('http');
  // , path = require('path');

var app = express();

app.set('title', 'SpinnerSender');
app.set('views', __dirname + '/views'); // general config
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// import http from 'http';
// http.createServer((req, res) => {})

app.listen(3000, function () {
  console.log('Listening on port!');
});

// function checkInfo() {
//   console.log("found me finding you");
//   // console.log(req.params)
// };

app.get('/', function (req, res) {
  res.render('index.html')
});

var $ = require('jquery/src/core');
// require('jquery/src/init');
// require('jquery/src/manipulation');
$('body').append('<p>Success!</p>')

$(function() {
  console.log('we have jquery');
  // $("#hitSend").on("click", function() {
  //   console.log('heard your send');
  // })
})

// app.get('/takeInfo', function(req, res, checkInfo) {
//   // res.send('thanks for that');
//   checkInfo(req.params)
//   // console.log(req);
// })

// app.configure(function(){
//    app.set('views', __dirname + '/views');
//    app.set('views');
//    // => "/absolute/path/to/views"

//    // app.enable('some feature');
//    // same as app.set('some feature', true);

//    // app.disable('some feature');
//    // same as app.set('some feature', false);

//    // app.enabled('some feature')
//    // => false

//    app.configure(function(){
//        app.use(express.methodOverride());
//        app.use(express.bodyParser());
//        app.use(app.router);
//    });

// });
