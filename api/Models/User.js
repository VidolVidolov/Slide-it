const mongoose = require('mongoose');

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    currentCar: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
    },
    wishCars: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Car',
        },
    ],
    dreamCar: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
    },
    availableMoney: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('User', User);
