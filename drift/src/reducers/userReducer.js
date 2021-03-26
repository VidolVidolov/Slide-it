import { REGISTER } from '../actionTypes/userActionTypes';

const initalStateUser = {
    id: '',
    email: '',
    idToken: '',
    logged: false,
};

const user = (state = initalStateUser, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                logged: true,
                ...action.payload,
            };

        default:
            return state;
    }
};
export default user;
