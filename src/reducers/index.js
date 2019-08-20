import {combineReducers} from 'redux';
import authReducer from './authReducer.js';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer
});