const {Model, Database} = require('mongorito');

class Post extends Model {}

const db = new Database('mongodb://root:rootps@192.168.99.100:27017/root');
db.connect().then(() => {
    db.register(Post);
    console.log('Connected to MongoDB!');
});

module.exports = {
    Post
};