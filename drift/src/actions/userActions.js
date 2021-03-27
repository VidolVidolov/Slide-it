import {
    REGISTER,
    LOG_IN,
    FAIL_PERSIST_STATE,
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

export const register = (filledForm) => async (dispatch) => {
    try {
        const res = await userService.registerUser(filledForm);
        const data = await res.json();

        if (data.error) {
            throw {
                error: 'User already exists',
            };
        }
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

        dispatch(loginSuccess(infoUser));
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
                const infoUser = { email: user.email, idToken, id };

                dispatch(loginSuccess(infoUser));
            } else {
                dispatch(failPersistState());
            }
        });
    } catch (error) {
        throw { error: error.error || error.message };
    }
};
