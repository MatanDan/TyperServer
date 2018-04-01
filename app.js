let express = require('express');
let logger = require('./accesslog');
let cookieParser = require('cookie-parser');

// Load routers
let indexRouter = require('./routes/index');

// Express application
let app = express();
app.set('view engine', 'html');

// Logging requests
app.use(logger);

// Express middlewares
app.use(express.json());
app.use(cookieParser());

// Express routing
app.use('/', indexRouter);

// 404 Handler
app.use(function(req, res) {
  res.json({'title': 'not found'});
});

port = process.env.port || 80;
app.listen(port, function() {
  console.log("Server has been started on port " + port);
});
