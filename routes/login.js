const express = require('express');

let router = express.Router();

router.post('/', async (req, res) => {
    res.json(`Hello ${req.body.username}, you have been logged in`);
});

module.exports = router;