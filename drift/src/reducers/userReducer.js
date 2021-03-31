import {
    REGISTER,
    LOG_IN,
    REFRESH_STATE,
    FAIL_PERSIST_STATE,
    LOG_OUT,
} from '../actionTypes/userActionTypes';

const initialStateUser = {
    id: '',
    email: '',
    idToken: '',
    logged: false,
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
        case FAIL_PERSIST_STATE:
            return initialStateUser;
        default:
            return state;
    }
};
export default user;
export const userEmail = (state) => state.user.email;
export const userId = (state) => state.user.id;
