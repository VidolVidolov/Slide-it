const express = require('express');
const carsController = express.Router();
const carsService = require('../services/carsService');

carsController.get('/', async (req, res) => {
    try {
        const response = await carsService.loadAllCars();
        res.status(200).send(response);
    } catch (error) {
        res.status(404).send({ error: error.error || error.message });
    }
});

carsController.post('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const form = req.body;

        if (!Number(form.horsePower) || !Number(form.price)) {
            throw { error: 'Invalid form values' };
        }
        const response = await carsService.saveCar(userId, form);
        res.status(201).send(response);
    } catch (error) {
        res.status(404).send({ error: error.error || error.message });
    }
});

carsController.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        const response = await carsService.loadCar(userId);
        res.status(200).send(response);
    } catch (error) {
        res.status(404).send({ error: error.error || error.message });
    }
});

carsController.post('/:userId/car', async (req, res) => {
    try {
        const userId = req.params.userId;
        const form = req.body;

        if (!Number(form.bonusHorsePower) || !Number(form.price)) {
            throw { error: 'Invalid form values' };
        }
        const response = await carsService.modifyCar(userId, form);
        res.status(201).send(response);
    } catch (error) {
        res.status(404).send({ error: error.error || error.message });
    }
});

carsController.get('/:carId/details', async (req, res) => {
    try {
        const carId = req.params.carId;

        const response = await carsService.loadCarDetails(carId);
        res.status(200).send(response);
    } catch (error) {
        res.status(404).send({ error: error.error || error.message });
    }
});


module.exports = carsController;
