const mongoose = require('mongoose');

const Part = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    modelAppliable: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Car',
        },
    ],
    bonusHorsePower: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('Part', Part);
