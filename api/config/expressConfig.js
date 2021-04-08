const environment = process.env.NODE_ENV
    ? process.env.NODE_ENV.trim()
    : 'production';
    
const config = {
    development: {
        PORT: process.env.PORT || 4000,
    },
    production: {
        PORT: process.env.PORT || 80,
    },
};
module.exports = config[environment];
