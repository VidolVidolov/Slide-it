import { LOAD_ALL_CARS } from '../actionTypes/carActionTypes';
import { LOG_OUT } from '../actionTypes/userActionTypes';
const initialStateCars = [];

const allCars = (state = initialStateCars, action) => {
    switch (action.type) {
        case LOAD_ALL_CARS:
            return [...action.payload];
        case LOG_OUT:
            return initialStateCars;
        default:
            return state;
    }
};
export default allCars;
