/**
 * @overview Modal actions.
 */

// Constants
import * as actionTypes from '../constants/action-types';

export function openModal(customer) {
  console.log(customer);
  return {
    type: actionTypes.OPEN_MODAL,
    customer,
  };
}

export function closeModal() {
  return {
    type: actionTypes.CLOSE_MODAL,
  };
}
