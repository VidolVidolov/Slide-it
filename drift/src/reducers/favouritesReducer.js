import { LOAD_ALL_FAVOURITE_CARS, ADD_FAVOURITE_CAR } from '../actionTypes/carActionTypes';
import { LOG_OUT } from '../actionTypes/userActionTypes';
const initialStateFavouritesCars = [];

const favouriteCars = (state = initialStateFavouritesCars, action) => {
    switch (action.type) {
        case LOAD_ALL_FAVOURITE_CARS:
            return [...action.payload];
        case ADD_FAVOURITE_CAR:
            return [...state, ...action.payload];
        case LOG_OUT:
            return initialStateFavouritesCars;
        default:
            return state;
    }
};
export default favouriteCars;
