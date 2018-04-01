let express = require('express');
let postDao = require('../dao/postDao');
const {Post} = require('../model/base');
let router = express.Router();

router.get('/', function(req, res) {
    let newPost = new Post({title: 'createdWithObject'});
    postDao.save(newPost)
        .then(val =>
            res.json(val.toJSON()))
        .catch(() =>
            res.json({title: 'error'}));
});

module.exports = router;