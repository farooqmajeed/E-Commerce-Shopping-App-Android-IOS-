import firebase from '.././configs/db.js';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    RETRY_PASSWORD,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER,
    SIGNUP_USER_FAIL
} from './types';

export const emailChanged = (text) => {
    console.log("emailChanged", text);
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    console.log("passwordChanged", text);

    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
export const retryPassword = (text) => {
    console.log("retryPassword", text);

    return {
        type: RETRY_PASSWORD,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFail(dispatch));
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.main();
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};


export const signupUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => signupUserSuccess(dispatch, user))
            .catch(() => signupUserFail(dispatch));
    };
};

const signupUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: user
    });
};

const signupUserFail = (dispatch) => {
    dispatch({ type: SIGNUP_USER_FAIL });
};