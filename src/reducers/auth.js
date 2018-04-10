/**
 * @overview Authentication reducer.
 */

// Constants
import * as actionTypes from '../constants/action-types';

const initialState = {
  authenticated: false,
  error: null,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null,
      };
    case actionTypes.SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null,
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
