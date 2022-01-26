import { combineReducers } from 'redux';

import user from './userReducer';
import car from './carReducer';
import allCars from './allCarsReducer';
import favouriteCars from './favouritesReducer';

const rootReducer = combineReducers({
    user,
    car,
    allCars,
    favouriteCars,
});
export default rootReducer;
