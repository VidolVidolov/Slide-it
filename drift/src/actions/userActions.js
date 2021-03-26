import { REGISTER } from '../actionTypes/userActionTypes';
import userService from '../services/userService';

const registerSuccess = (userInfo) => ({
    type: REGISTER,
    payload: userInfo,
});

export const register = (filledForm) => async (dispatch) => {
    try {
        const res = await userService.registerUser(filledForm);
        const data = await res.json();

        dispatch(registerSuccess(data));
    } catch (error) {
        throw { error: error.error };
    }
};
