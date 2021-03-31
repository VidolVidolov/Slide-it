import { SAVE_CAR, LOAD_CAR } from '../actionTypes/carActionTypes';
import carService from '../services/carService';

const saveCarSuccess = (car) => ({
    type: SAVE_CAR,
    payload: car,
});

const loadCarSuccess = (car) => ({
    type: LOAD_CAR,
    payload: car,
});
export const saveCar = (userId, form) => async (dispatch) => {
    try {
        console.log(form);
        const data = await carService.saveCar(userId, form);
    } catch (error) {
        console.log(error);
    }
};

export const loadCarInfo = (userId) => async (dispatch) => {
    try {
        const res = await carService.loadCar(userId);
        const data = await res.json();

        if (data.error) {
            throw { error: data.error };
        }

        dispatch(loadCarSuccess(data));
    } catch (error) {
        console.log(error);
    }
};

export const modifyCar = (userId, form) => async (dispatch) => {
    try {
        const res = await carService.modifyCar(userId, form);
        const data = await res.json();

        if (data.error) {
            throw { error: data.error };
        }

        dispatch(loadCarSuccess(data));
    } catch (error) {
        console.log(error);
    }
};