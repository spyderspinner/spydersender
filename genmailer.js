var email = require('mailer');

email.send({
    host : "smtp.gmail.com",
    port : "465",
    ssl : true,
    domain : "i-visionblog.com",
    to : "l.a.hearnden@gmail.com",
    from : "author@ivb.com",
    subject : "Mailer library Mail node.js",
    text: "Mail by Mailer library",
    html: "<span> Hello World Mail sent from  mailer library" ,
    authentication : "login",        // auth login is supported; anything else $
    username : 'spyderricerichson@gmail.com',
    password : 'tinydick10'
    },
    function(err, result){
      if(err){ self.now.error(err); console.log(err); res.send("error occured"); }
      else { console.log('hurray! Email Sent');
      res.send("Email Sent")}
});

// Enrique Peña Nieto
// franciscocastro11

// var random_string = function () {
//   // your random string code goes here
// };

// var message = {
//   from: random_string,
//   to: '<someone@somewhere.com>',
//   // ...
// }