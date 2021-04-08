import {
    REGISTER,
    LOG_IN,
    FAIL_PERSIST_STATE,
    LOG_OUT,
    CHANGE_LOCATION,
    SHOW_WEATHER,
    HIDE_WEATHER,
    ADD_TO_FAVOURITES,
    LOAD_USER_FAVOURITES,
} from '../actionTypes/userActionTypes';
import userService from '../services/userService';
import { auth } from '../utils/firebase';

const registerSuccess = (userInfo) => ({
    type: REGISTER,
    payload: userInfo,
});

const loginSuccess = (userInfo) => ({
    type: LOG_IN,
    payload: userInfo,
});

const failPersistState = () => ({
    type: FAIL_PERSIST_STATE,
});

const logoutSuccess = () => ({
    type: LOG_OUT,
});
const changeLocationSuccess = (location) => ({
    type: CHANGE_LOCATION,
    payload: location,
});
export const changeWeatherToVisible = () => ({
    type: SHOW_WEATHER,
});

export const changeWeatherToNotVisible = () => ({
    type: HIDE_WEATHER,
});

const addCarToFavouritesSuccess = (carId) => ({
    type: ADD_TO_FAVOURITES,
    payload: carId,
});
const getUserFavouritesSuccess = (data) => ({
    type: LOAD_USER_FAVOURITES,
    payload: data,
});

export const register = (filledForm) => async (dispatch) => {
    try {
        const res = await userService.registerUser(filledForm);
        const data = await res.json();

        if (data.error) {
            throw {
                error: 'User already exists',
            };
        }
        localStorage.setItem('loggedIn', 'true');
        dispatch(registerSuccess(data));
    } catch (error) {
        throw { error: error.error || error.message, field: 'email' };
    }
};

export const login = (form) => async (dispatch) => {
    try {
        const { email, password } = form;
        const data = await auth.signInWithEmailAndPassword(email, password);
        const idToken = await data.user.getIdToken();
        const tokenResult = await auth.currentUser.getIdTokenResult();
        const id = tokenResult.claims.id;
        const infoUser = { email: data.user.email, idToken, id };

        // dispatch(loginSuccess(infoUser));
    } catch (error) {
        throw { error: 'Email or password is invalid', field: 'email' };
    }
};

export const onAuthStateChanged = () => async (dispatch) => {
    try {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idToken = await user.getIdToken();
                const tokenResult = await auth.currentUser.getIdTokenResult();
                const id = tokenResult.claims.id;
                localStorage.setItem('loggedIn', 'true');
                const infoUser = { email: user.email, idToken, id };
                dispatch(loginSuccess(infoUser));

                return;
            }

            dispatch(failPersistState());
            localStorage.removeItem('loggedIn');
        });
    } catch (error) {
        throw { error: error.error || error.message };
    }
};

export const logout = () => async (dispatch) => {
    try {
        await auth.signOut();
        localStorage.removeItem('loggedIn');
        dispatch(logoutSuccess());
    } catch (error) {
        throw { error: error.message || error.error };
    }
};

export const changeLocation = (location) => async (dispatch) => {
    try {
        if (location === '') {
            throw { error: 'Location cannot be empty string' };
        }
        dispatch(changeLocationSuccess(location));
    } catch (error) {
        throw { error: error.message || error.error };
    }
};

export const addCarToFavourites = (userId, carId) => async (dispatch) => {
    try {
        const res = await userService.addCarToFavourites(userId, carId);
        const data = await res.json();

        if (data.error) {
            throw { error: data.error };
        }

        dispatch(addCarToFavouritesSuccess(data.carId));
    } catch (error) {
        console.log(error);
    }
};

export const getUserFavourites = (userId) => async (dispatch) => {
    try {
        const data = await userService.getUserFavourites(userId);
        
        const favourites = await data.json();
        if (data.error) {
            throw { error: data.error };
        }
        dispatch(getUserFavouritesSuccess(favourites));
    } catch (error) {
        console.log(error);
    }
};
