const Car = require('../Models/Car');
const User = require('../Models/User');
const Part = require('../Models/Part');

const saveCar = async (userId, form) => {
    try {
        const user = await User.findById(userId);

        if (!user) {
            throw { error: 'The car has no user!' };
        }
        const carId = user.currentCar;
        const car = await Car.findById(carId);
        Object.keys(form).forEach((x) => (car[x] = form[x]));
        await car.save();
        return form;
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
        const user = await User.findById(userId)
            .populate({
                path: 'currentCar',
                populate: 'parts',
            })
            .lean();

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
        const carId = user.currentCar;
        const car = await Car.findById(carId);
        const part = await Part.create({ ...form });
        car.parts.push(part);
        await car.save();
        return form;
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
