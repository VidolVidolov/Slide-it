const environment = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : 'production';

const config = {
    development: {
        PORT: 4000,
    },
    production: {
        PORT: 80,
    },
};

module.exports = config[environment];
