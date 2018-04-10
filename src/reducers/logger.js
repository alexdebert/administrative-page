/**
 * @overview Logger reducer.
 */

// Constants
import * as actionTypes from '../constants/action-types';

// Utils
import { logMessage } from '../actions/loggerActions';

const initialState = {
  log: {},
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        log: logMessage(action.log),
      };
    case actionTypes.SIGN_OUT_USER:
      return {
        log: logMessage(action.log),
      };
    case actionTypes.CUSTOMER_FORM_UNFILLED_LEAVE_PAGE:
      return {
        log: logMessage(action.log),
      };
    case actionTypes.ADMINISTRATIVE_PAGE_ACCESS:
      return {
        log: logMessage(action.log),
      };
    case actionTypes.CUSTOMER_FORM_SUBMITTED:
      return {
        log: logMessage(action.log),
      };
    case actionTypes.CUSTOMER_FORM_CREATED:
      return {
        log: logMessage(action.log),
      };
    case actionTypes.CUSTOMER_FORM_UNFILLED_TIMEOUT:
      return {
        log: logMessage(action.log),
      };
    default:
      return state;
  }
}
