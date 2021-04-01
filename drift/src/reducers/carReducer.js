import { LOAD_CAR, MODIFY_CAR } from '../actionTypes/carActionTypes';
import { LOG_OUT } from '../actionTypes/userActionTypes';
const initialStateCar = {
    _id: '',
    brand: '',
    model: '',
    horsePower: '',
    price: '',
    picture: '',
    parts: [],
};

const car = (state = initialStateCar, action) => {
    switch (action.type) {
        case LOAD_CAR:
            return {
                ...state,
                ...action.payload,
            };
        case MODIFY_CAR:
            return {
                ...state,
                parts: [...state.parts, { ...action.payload }],
            };
        case LOG_OUT:
            return initialStateCar;
        default:
            return state;
    }
};
export default car;
