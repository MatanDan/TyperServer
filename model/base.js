const {Model, Database} = require('mongorito');

class Post extends Model {}

const db = new Database('mongodb://root:rootps@192.168.99.100:27017/root');
databaseConnect();

async function databaseConnect() {
    try {
        await db.connect();
        db.register(Post);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log('Could not connect to MongoDB!!!');
    }
}

module.exports = {
    Post
};