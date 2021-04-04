const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(
        `mongodb+srv://vidolVidolov:parola123@cluster0.zqeek.mongodb.net/slideIT?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    const db = mongoose.connection;

    db.on('error', () => console.error('Connection failed!'));
    db.once('open', () => console.log('Ready to go mate!!'));
};
