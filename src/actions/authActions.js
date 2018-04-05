/**
 * @overview Authentication actions.
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:9001/users/';

export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

export function signInUser(credentials) {
  return axios.get(BASE_URL)
    .then((response) => {
      console.log('r', response);
      console.log('c', credentials);
    });
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}

export function authUser() {
  return {
    type: AUTH_USER,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
