const express = require('express');
const router = express.Router();
const homeController = require('./Controllers/homeController');
const userController = require('./Controllers/userController');
const carsController = require('./Controllers/carsController');
router.get('/', (req, res) => {
    res.send('Its working!');
});
router.use('/api/users', userController);
router.use('/api/cars', carsController);
router.use('/api', homeController);

module.exports = router;
