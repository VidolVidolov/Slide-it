import { combineReducers } from 'redux';
import user from './userReducer';
import car from './carReducer';
import allCars from './allCarsReducer';

const rootReducer = combineReducers({
    user,
    car,
    allCars
});
export default rootReducer;
