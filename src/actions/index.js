import history from './../history.js';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from './types.js';
import streams from './../apis/streams.js';

export const signIn = (userId) => {
    return {type: SIGN_IN, payload: userId};
};

export const signOut = () => {
    return {type: SIGN_OUT};
};

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const {userId} = getState().auth;
       const response = await streams.post('/streams', {...formValues, userId});
       dispatch({type: CREATE_STREAM, payload: response.data});
       history.push('/');
    }
}

export const fetchStreams = () => {
    return async (dispatch, getState) => {
        const response = await streams.get('/streams');
        dispatch({type: FETCH_STREAMS, payload: response.data});
    }
}

export const fetchStream = (id) => {
    return async (dispatch, getState) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({type: FETCH_STREAM, payload: response.data});
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch, getState) => {
        const response = await streams.put(`/streams/${id}`, formValues);
        dispatch({type: EDIT_STREAM, payload: response.data});
        history.push('/');
    }
}

export const deleteStream = (id) => {
    return async (dispatch, getState) => {
        await streams.delete(`/stream/${id}`);
        dispatch({type: DELETE_STREAM, payload: id});
    }
}