import { LOAD_CAR } from '../actionTypes/carActionTypes';
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
        default:
            return state;
    }
};
export default car;
