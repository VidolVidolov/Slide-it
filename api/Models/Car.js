const mongoose = require('mongoose');

const Car = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        unique: true,
    },
    model: {
        type: String,
    },
    horsePower: {
        type: Number,
        default: 0,
    },
    parts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Part',
        },
    ],
    modifications: {
        type: Array,
    },
    potential: {
        type: Number,
        default: 0,
    },
    picture: {
        type: String,
    },
    videoLink: {
        type: String,
    },
    price: {
        type: Number,
    },
});

module.exports = mongoose.model('Car', Car);
