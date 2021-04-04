const User = require('../Models/User');
const Car = require('../Models/Car');
const bcrypt = require('bcrypt');
const admin = require('firebase-admin');
const saltRounds = 10;

const registerUser = async ({ email, password, currentCar }) => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        const car = await Car.create({
            brand: currentCar.toLowerCase(),
        });
        const userDB = await User.create({
            email,
            password: hash,
            currentCar: car,
        });

        const userFirebase = await admin.auth().createUser({ email, password });

        await admin.auth().setCustomUserClaims(userFirebase.uid, { id: userDB._id });
        const idToken = await admin.auth().createCustomToken(userFirebase.uid);
        return { idToken, email, id: userDB._id };
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
    registerUser,
};
