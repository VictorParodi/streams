import {SIGN_IN, SIGN_OUT} from './types.js';
import streams from './../apis/streams.js';

export const signIn = (userId) => {
    return {type: SIGN_IN, payload: userId};
};

export const signOut = () => {
    return {type: SIGN_OUT};
};

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        streams.post('/streams', formValues);
    }
}