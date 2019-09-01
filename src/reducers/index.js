import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import {reducer as formReducer} from 'redux-form';
import streamReducer from './streamReducer.js';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});