import { emailRegex } from '../regex/emailRegex';
import { passwordRegex } from '../regex/passwordRegex';

const registerValidator = (form) => {
    const { email, password, repeatPassword, currentCar } = form;

    if (email.trim() === '') {
        throw { error: 'The email field can not be empty', field: 'email' };
    }

    if (!emailRegex.test(email)) {
        throw { error: 'The email is not the right format', field: 'email' };
    }

    if (!passwordRegex.test(password)) {
        throw {
            error: 'Password should have 6 symbols, digit, letter',
            field: 'password',
        };
    }

    if (password !== repeatPassword) {
        throw { error: 'The passwords do not match', field: 'password' };
    }
    const check = Number(currentCar).toString();
    if (check != 'NaN') {
        throw {
            error: 'Car like this does not exist',
            field: 'currentCar',
        };
    }

    return form;
};

export default registerValidator;
