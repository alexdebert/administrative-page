/**
 * @overview Authentication actions.
 */

import axios from 'axios';

// Constants
import * as actionTypes from '../constants/action-types';
import * as constants from '../constants/constants';

function validateLogin(data, credentials) {
  const validUsername = data.username;
  const validPassword = data.password;
  const enteredUsername = credentials.username;
  const enteredPassword = credentials.password;

  if (validUsername !== enteredUsername || validPassword !== enteredPassword) {
    throw constants.MOCK_DATA_ERROR;
  }
}

function loginWithUserNameAndPassword(credentials) {
  return axios.get(`${constants.BASE_URL}users`)
    .then((response) => {
      validateLogin(response.data[0], credentials);
    });
}

export function logoutUser() {
  return {
    type: actionTypes.SIGN_OUT_USER,
    log: actionTypes.SIGN_OUT_USER,
  };
}

export function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    log: actionTypes.LOGIN_SUCCESS,
  };
}

export function loginError(error) {
  return {
    type: actionTypes.LOGIN_ERROR,
    payload: error,
  };
}

export function loginUser(credentials) {
  return (dispatch) => {
    loginWithUserNameAndPassword(credentials)
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginError(error));
      });
  };
}

