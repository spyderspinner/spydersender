console.log("Hello Spyder!!");

var express = require('express');
var app = express();
var emailprov;
app.use(express.static(__dirname + '/views'));
app.set('title', 'SpinnerSender');

app.listen(3000, function () {
  console.log('Listening on port!');

  function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
  }

  prompt("What email address?", function (input) {
    console.log(input);
    return updatePage(input);
    // function (input) {
    //   app.get('/', function(req, res) {
    //     res.write(input);
    //     res.end();
    //   })
    // }
  });

});

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Is anyone in here?");
  res.end();
});