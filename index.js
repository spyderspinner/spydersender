console.log("Hello Spyder!!");

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('title', 'SpinnerSender');
app.set('views', __dirname + '/views'); // general config
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.set('view engine', 'jade');


app.listen(process.env.PORT, function () {
  console.log('Listening on port!');
});

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

function checkInfo() {
};

app.get('/', function (req, res) {
  // res.send('See me here!');
  res.render('index.html')
  // buildIntakeForm;
});

