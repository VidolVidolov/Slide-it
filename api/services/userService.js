const User = require('../Models/User');

const addCarToFavourites = async (userId, carId) => {
    try {
        const user = await User.findById(userId);
        if (user === null) {
            throw { error: 'User not found!' };
        }

        user._doc.wishCars.push(carId);
        await user.save();
        return { carId };
    } catch (error) {
        const errorToThrow = {};

        error.errors
            ? (errorToThrow.error =
                  error.errors[Object.keys(error.errors)[0]].message)
            : (errorToThrow.error = error.message);

        throw errorToThrow;
    }
};
const getUserFavourites = async (userId) => {
    try {
        const user = await User.findById(userId).lean();
        if (user === null) {
            throw { error: 'User not found!' };
        }

        return user.wishCars;
    } catch (error) {
        const errorToThrow = {};

        error.errors
            ? (errorToThrow.error =
                  error.errors[Object.keys(error.errors)[0]].message)
            : (errorToThrow.error = error.message);

        throw errorToThrow;
    }
};

module.exports = {
    addCarToFavourites,
    getUserFavourites,
};
