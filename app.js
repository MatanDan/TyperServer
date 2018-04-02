const express = require('express');
const logger = require('./accesslog');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Load routers
const indexRouter = require('./routes/index');

// Express application
let app = express();
app.set('view engine', 'html');

// Logging requests, CORS enabled for clients access
app.use(logger);
app.use(cors());

// Express middlewares
app.use(express.json());
app.use(cookieParser());

// Express routing
app.use('/', indexRouter);

// 404 Handler
app.use((req, res) => {
  res.json({'title': 'not found'});
});

port = process.env.port || 80;
app.listen(port, () => {
  console.log("Server has been started on port " + port);
});
