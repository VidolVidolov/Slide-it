import { HTTP } from '../constants/index';
import firebase from '../utils/firebase';
import { getToken } from '../helpers/userProvider';

const request = async (url, method, data) => {
    const options = {
        method,
    };

    let token = '';
    if (firebase.auth().currentUser) {
        token = await getToken();
    }

    if (token) {
        options.headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };
    } else {
        options.headers = {
            'Content-Type': 'application/json',
        };
    }
    
    if (data) {
        options.body = JSON.stringify({ ...data });
    }
    
    return fetch(url, options);
};

export default {
    get: (url, data) => request(url, HTTP.GET, data),
    post: (url, data) => request(url, HTTP.POST, data),
    delete: (url, data) => request(url, HTTP.DELETE, data),
    put: (url, data) => request(url, HTTP.PUT, data),
    patch: (url, data) => request(url, HTTP.PATCH, data),
};
