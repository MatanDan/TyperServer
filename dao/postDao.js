const {Post} = require('../model/base');
let baseDao = require('./baseDao');


module.exports.save = function(title, authorName) {
    let newPost = new Post({
        title: title,
        author: {
            name: authorName
        }
    });

    return baseDao.save(newPost);
};

