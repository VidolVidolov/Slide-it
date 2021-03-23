const express = require('express');
const userAuthRouter = express.Router();

userAuthRouter.get('/', (req, res) => {
    res.send('auth');
});

module.exports = userAuthRouter;
