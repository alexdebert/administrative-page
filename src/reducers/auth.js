/**
 * @overview Authentication reducer.
 */

import { LOGIN_SUCCESS, SIGN_OUT_USER, LOGIN_ERROR } from '../actions/authActions';
import { loggerAction } from '../utils/logger';

const initialState = {
  authenticated: false,
  error: null,
  log: {},
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null,
        log: loggerAction(action.log),
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null,
        log: loggerAction(action.log),
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
