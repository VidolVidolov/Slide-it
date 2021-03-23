const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/slideIT', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on('error', () => console.error('Connection failed!'));
    db.once('open', () => console.log('Ready to go mate!!'));
};
