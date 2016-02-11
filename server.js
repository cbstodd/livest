var express = requires('express');

// Sets NODE env or default.
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.configure(function () {
  app.set('views', _dirname + '/server/views');
  app.set('view_engine', 'jade');
});

//Matches all routes.
app.get('*', function (req, res) {
  res.render('index');
});

var port = 3030;
app.listen(port);
console.log("*** Listening on port http://" + port + "***");