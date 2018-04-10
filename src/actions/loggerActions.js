/**
 * @overview Logger actions.
 */

// Constant
import * as actionTypes from '../constants/action-types';

export function customerFormTimeoutLog() {
  return {
    type: actionTypes.CUSTOMER_FORM_UNFILLED_TIMEOUT,
    log: actionTypes.CUSTOMER_FORM_UNFILLED_TIMEOUT,
  };
}

export function customerFormCreatedLog() {
  return {
    type: actionTypes.CUSTOMER_FORM_CREATED,
    log: actionTypes.CUSTOMER_FORM_CREATED,
  };
}

export function leaveFormPageLog() {
  return {
    type: actionTypes.CUSTOMER_FORM_UNFILLED_LEAVE_PAGE,
    log: actionTypes.CUSTOMER_FORM_UNFILLED_LEAVE_PAGE,
  };
}

export function formSubmittedLog() {
  return {
    type: actionTypes.CUSTOMER_FORM_SUBMITTED,
    log: actionTypes.CUSTOMER_FORM_SUBMITTED,
  };
}

export function accessAdministrativePageLog() {
  return {
    type: actionTypes.ADMINISTRATIVE_PAGE_ACCESS,
    log: actionTypes.ADMINISTRATIVE_PAGE_ACCESS,
  };
}

export function logMessage(log) {
  console.log(log);
}

export function accessApplicationLog() {
  logMessage(actionTypes.ACCESS_APPLICATION);
}
