const express = require('express');
const router = express.Router();
const homeController = require('./Controllers/homeController');
const userAuthController = require('./Controllers/userAuthController');

router.use('/api', homeController);
router.use('/api/auth', userAuthController);

module.exports = router;
