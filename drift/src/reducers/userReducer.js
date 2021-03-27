import {
    REGISTER,
    LOG_IN,
    REFRESH_STATE,
    FAIL_PERSIST_STATE,
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
        case FAIL_PERSIST_STATE:
            return initialStateUser;
        default:
            return state;
    }
};
export default user;
