/**
 * @overview Authentication actions.
 */

import axios from 'axios';

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const BASE_URL = 'http://localhost:9001/users/';
const mockDataError = 'Invalid Username or Password';

function validateLogin(data, credentials) {
  const validUsername = data.username;
  const validPassword = data.password;
  const enteredUsername = credentials.username;
  const enteredPassword = credentials.password;

  if (validUsername !== enteredUsername || validPassword !== enteredPassword) {
    throw mockDataError;
  }
}

function loginWithUserNameAndPassword(credentials) {
  return axios.get(BASE_URL)
    .then((response) => {
      validateLogin(response.data[0], credentials);
    });
}

export function logoutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
}

export function loginUser(credentials) {
  return function (dispatch) {
    loginWithUserNameAndPassword(credentials)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginError(error));
      });
  };
}

