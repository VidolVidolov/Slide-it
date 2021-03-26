import { BASE_URL } from '../constants/api';
const USER_AUTH_URL = `${BASE_URL}/users/auth`;
export const userApi = {
    registerUser: () => `${USER_AUTH_URL}/register`,
};
