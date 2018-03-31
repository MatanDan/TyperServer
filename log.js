var morgan = require('morgan');
var path = require('path');
var fs = require('fs');
var rfs = require('rotating-file-stream')

// Ensure log directory exists
var logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// Create a rotating write stream
accessLogStream = rfs('access.log', {
    size:       '10M', // rotate every 10M
    interval:   '1d', // rotate daily
    path:       logDirectory,
    compress:   true
});

// Common stands for:
// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]
module.exports = morgan('common', {stream: accessLogStream});