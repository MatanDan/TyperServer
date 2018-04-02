const {Post} = require('../model/base');
let baseDao = require('./baseDao');


module.exports.save = (title, authorName) => {
    let newPost = new Post({
        title: title,
        author: {
            name: authorName
        }
    });

    return baseDao.save(newPost);
};

module.exports.save = saveObject => baseDao.save(saveObject);