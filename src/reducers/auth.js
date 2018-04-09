/**
 * @overview Authentication reducer.
 */

import { LOGIN_SUCCESS, SIGN_OUT_USER, LOGIN_ERROR } from '../actions/authActions';

const initialState = {
  authenticated: false,
  error: null,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null,
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
