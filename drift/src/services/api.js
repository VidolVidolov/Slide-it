import { BASE_URL } from '../constants/api';
const USER_AUTH_URL = `${BASE_URL}/users/auth`;
const USER_URL = `${BASE_URL}/users`;
const CAR_URL = `${BASE_URL}/cars`;
export const userApi = {
    registerUser: () => `${USER_AUTH_URL}/register`,
    addCarToFavourites: (userId) => `${USER_URL}/${userId}/favourites`,
};

export const carApi = {
    saveCar: (userId) => `${CAR_URL}/${userId}`,
    loadCar: (userId) => `${CAR_URL}/${userId}`,
    modifyCar: (userId) => `${CAR_URL}/${userId}/car`,
    loadAllCars: () => `${CAR_URL}`,
};
