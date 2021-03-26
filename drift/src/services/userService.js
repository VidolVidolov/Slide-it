import { userApi } from './api';
import requester from './requester';
export default {
    registerUser: (form) => requester.post(userApi.registerUser(), { ...form }),
};
