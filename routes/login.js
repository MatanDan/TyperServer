const express = require('express');

let router = express.Router();

router.post('/', (req, res) => {
    if (typeof req.session.name === 'undefined') {
        req.session.name = req.body.username;
        res.json(`Hello ${req.body.username}, you have been logged in`);
    } else {
        res.json(`Already logged in as  ${req.session.name}`);
    }
});

router.get('/loggedas', (req, res) => {
    result = {username: null};
    if (typeof req.session.name !== 'undefined') {
        result.username = req.session.name;
    }
    res.json(result);
});

router.get('/logout', (req, res) => {
    req.session.destroy(error => console.log(error));
    res.end();
});

module.exports = router;