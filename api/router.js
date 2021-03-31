const express = require('express');
const router = express.Router();
const homeController = require('./Controllers/homeController');
const userAuthController = require('./Controllers/userAuthController');
const carsController = require('./Controllers/carsController');

router.use('/api/users', userAuthController);
router.use('/api/cars', carsController)
router.use('/api', homeController);

module.exports = router;
