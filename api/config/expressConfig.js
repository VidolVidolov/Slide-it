const environment = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : 'production';

const config = {
    development: {
        PORT: process.env.NODE_ENV || 4000,
    },
    production: {
        PORT: 80,
    },
};
module.exports = config[environment];
