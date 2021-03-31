const Car = require('../Models/Car');
const User = require('../Models/User');

const saveCar = async (userId, form) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw { error: 'The car has no user!' };
        }
        const carId = user.currentCar;
        const car = await Car.findById(carId);
        Object.keys(form).forEach((x) => (car[x] = form[x]));
        return await car.save();
    } catch (error) {
        const errorToThrow = {};

        error.errors
            ? (errorToThrow.error =
                  error.errors[Object.keys(error.errors)[0]].message)
            : (errorToThrow.error = error.message);

        throw errorToThrow;
    }
};

const loadCar = async (userId) => {
    try {
        const user = await User.findById(userId).populate('currentCar').lean();

        if (!user) {
            throw { error: 'The car has no user!' };
        }
        const car = user.currentCar;
        return car;
    } catch (error) {
        const errorToThrow = {};

        error.errors
            ? (errorToThrow.error =
                  error.errors[Object.keys(error.errors)[0]].message)
            : (errorToThrow.error = error.message);

        throw errorToThrow;
    }
};

const modifyCar = async (userId, form) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw { error: 'The car has no user!' };
        }
        
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
    saveCar,
    loadCar,
    modifyCar,
};
