var express = require('express');

//Create our app
var app = express();
cpnst PORT = procee.env.PORT || 3000;

app.use(function (req, res, next) {
  if(req.headers['x-forwardedproto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));
app.listen (PORT, function () {
  console.log('Express  server is up on port 3000' + PORT);
});
