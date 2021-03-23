const mongoose = require('mongoose');

const Car = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        unique: true,
    },
    model: {
        type: String,
        required: true,
    },
    horsePower: {
        type: Number,
        required: true,
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
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Car', Car);
