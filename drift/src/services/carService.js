import requester from './requester';
import { carApi } from './api';

export default {
    saveCar: (userId, form) => requester.post(carApi.saveCar(userId), { ...form }),
    loadCar: (userId) => requester.get(carApi.loadCar(userId))
};
