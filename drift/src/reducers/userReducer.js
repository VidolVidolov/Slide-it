import {
    REGISTER,
    LOG_IN,
    REFRESH_STATE,
    FAIL_PERSIST_STATE,
    LOG_OUT,
    CHANGE_LOCATION,
    HIDE_WEATHER,
    SHOW_WEATHER,
} from '../actionTypes/userActionTypes';

const initialStateUser = {
    id: '',
    email: '',
    idToken: '',
    logged: false,
    location: 'Sofia',
    showWeather: false,
};

const user = (state = initialStateUser, action) => {
    switch (action.type) {
        case REGISTER:
        case LOG_IN:
        case REFRESH_STATE:
            return {
                ...state,
                logged: true,
                ...action.payload,
            };
        case LOG_OUT:
            return initialStateUser;
        case CHANGE_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        case HIDE_WEATHER:
            return {
                ...state,
                showWeather: false,
            };
        case SHOW_WEATHER:
            return {
                ...state,
                showWeather: true,
            };
        case FAIL_PERSIST_STATE:
        default:
            return state;
    }
};
export default user;
export const userEmail = (state) => state.user.email;
export const userId = (state) => state.user.id;
export const userLocation = (state) => state.user.location;
export const showWeather = (state) => state.user.showWeather;
