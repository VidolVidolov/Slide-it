import firebase from '../utils/firebase';

export const getToken = async () => {
    let { token } = await firebase.auth().currentUser.getIdTokenResult();

    return token;
};
