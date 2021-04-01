import { SAVE_CAR, LOAD_CAR, MODIFY_CAR } from '../actionTypes/carActionTypes';
import carService from '../services/carService';

const saveCarSuccess = (car) => ({
    type: SAVE_CAR,
    payload: car,
});

const loadCarSuccess = (car) => ({
    type: LOAD_CAR,
    payload: car,
});

const modifyCarSuccess = (part) => ({
    type: MODIFY_CAR,
    payload: part,
});

export const saveCar = (userId, form) => async (dispatch) => {
    try {
        const res = await carService.saveCar(userId, form);
        const data = await res.json();

        if (data.error) {
            throw { error: data.error };
        }

        dispatch(saveCarSuccess(data));
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

        dispatch(modifyCarSuccess(data));
    } catch (error) {
        console.log(error);
    }
};
