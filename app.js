var express = require('express');
var logger = require('./log')
var cookieParser = require('cookie-parser');

// Load routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Express application
var app = express();
app.set('view engine', 'html');

// Logging requests
app.use(logger);

// Express middlewares
app.use(express.json());
app.use(cookieParser());

// Express routing
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 Handler
app.use(function(req, res) {
  res.json({'title': 'not found'});
});

port = process.env.port || 80;
app.listen(port, function() {
  console.log("Server has been started on port " + port);
});
