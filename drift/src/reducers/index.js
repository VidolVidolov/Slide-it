import { combineReducers } from 'redux';
import user from './userReducer';
import car from './carReducer';

const rootReducer = combineReducers({
    user,
    car,
});
export default rootReducer;
