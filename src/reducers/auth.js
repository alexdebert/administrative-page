/**
 * @overview Authentication reducer.
 */

// Constants
import * as actionTypes from '../constants/action-types';

// Utils
import { loggerAction } from '../utils/logger';

const initialState = {
  authenticated: false,
  error: null,
  log: {},
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null,
        log: loggerAction(action.log),
      };
    case actionTypes.SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null,
        log: loggerAction(action.log),
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
