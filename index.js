console.log("Hello Spyder!")

exports.index = function(req, res){
  res.sendfile('index.html');
};