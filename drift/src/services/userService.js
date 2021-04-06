import { userApi } from './api';
import requester from './requester';
export default {
    registerUser: (form) => requester.post(userApi.registerUser(), { ...form }),
    addCarToFavourites: (userId, carId) =>
        requester.post(userApi.addCarToFavourites(userId), { carId }),
    getUserFavourites: (userId) =>
        requester.get(userApi.getUserFavourites(userId)),
};
