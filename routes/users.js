var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  response = {'title': 'users'};
  res.json(response);
});

module.exports = router;
