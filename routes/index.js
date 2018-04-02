let express = require('express');
let postDao = require('../dao/postDao');
const {Post} = require('../model/base');
let router = express.Router();

router.get('/', async (req, res) => {
    let newPost = new Post({
        title: 'createdWithObject',
        random: 'hi'
    });
    try {
        val = await postDao.save(newPost);
        res.json(val.toJSON());
    } catch (error) {
        res.json({title: 'error'});
    }
});

module.exports = router;