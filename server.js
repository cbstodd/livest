'user strict';

var express = require('express');

// Sets NODE env or default.
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.listen(function () {
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'jade');
});

//Matches all routes.
app.get('*', function (req, res) {
  res.render('index');
});

var port = 3000;
app.listen(port);
console.log("*** Listening on port http://localhost" + port + " ***");