import requester from './requester';
import { carApi } from './api';
import { userId } from '../reducers/userReducer';

export default {
    saveCar: (userId, form) =>
        requester.post(carApi.saveCar(userId), { ...form }),
    loadCar: (userId) => requester.get(carApi.loadCar(userId)),
    modifyCar: (userId, form) =>
        requester.post(carApi.modifyCar(userId), { ...form }),
    loadAllCars: () => requester.get(carApi.loadAllCars()),
    loadAllFavourites: (userId) =>
        requester.get(carApi.loadAllFavourites(userId)),
};
