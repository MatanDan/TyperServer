let morgan = require('morgan');
let path = require('path');
let fs = require('fs');
let rfs = require('rotating-file-stream');

// Ensure log directory exists
let logDirectory = path.join(__dirname, 'logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

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