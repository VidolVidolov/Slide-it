const express = require('express');
const userRouter = express.Router();
const emailRegex = require('../regex/emailRegex');
const passwordRegex = require('../regex/passwordRegex');
const userAuthService = require('../services/userAuthService');

userRouter.post('/auth/register', async (req, res) => {
    try {
        const { email, password, repeatPassword, currentCar } = req.body;

        if (email.trim() === '') {
            throw { error: 'The email field can not be empty', field: 'email' };
        }

        if (!emailRegex.test(email)) {
            throw {
                error: 'The email is not the right format',
                field: 'email',
            };
        }

        if (!passwordRegex.test(password)) {
            throw {
                error: 'Password should have 6 symbols, digit, letter',
                field: 'password',
            };
        }

        if (password !== repeatPassword) {
            throw { error: 'The passwords do not match', field: 'password' };
        }
        const check = Number(currentCar).toString();
        if (check != 'NaN') {
            throw {
                error: 'Car like this does not exist',
                field: 'currentCar',
            };
        }

        const response = await userAuthService.registerUser({
            email,
            password,
            currentCar,
        });
        res.status(201).send(response);
    } catch (error) {
        res.status(404).send({ error: error.error || error.message });
    }
});

userRouter.post('/:userId/favourites', async (req, res) => {
    try {
        const userId = req.params.userId;
        const carId = req.body.carId;

        const response = await userService.addCarToFavourites(userId, carId);
        res.status(201).send(response);
    } catch (error) {
        res.status(404).send({ error: error.error || error.message });
    }
});
module.exports = userRouter;
