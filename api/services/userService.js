const User = require('../Models/User');

const addCarToFavourites = async (userId, form) => {
    try {
        // to be done
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
};
