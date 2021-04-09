const serverAddress = {
    development: 'http://localhost:4000/api',
    production: 'https://slide-it-v.herokuapp.com/api',
};

export const BASE_URL = serverAddress[process.env.NODE_ENV];
