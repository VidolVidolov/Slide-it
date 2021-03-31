const express = require('express');
const carsController = express.Router();
const carsService = require('../services/carsService');

carsController.post('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const form = req.body;

        if (!Number(form.horsePower) || !Number(form.price)) {
            throw { error: 'Invalid form values' };
        }
        const response = await carsService.saveCar(userId, form);
        console.log(response);
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

module.exports = carsController;
