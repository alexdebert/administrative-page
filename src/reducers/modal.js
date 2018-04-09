/**
 * @overview Modal reducer.
 */

import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

const initialState = {
  selectedCustomer: null,
  modalIsOpen: false,
};

export default function modal(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedCustomer: action.customer.selectedCustomer,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedCustomer: null,
      };
    default:
      return state;
  }
}
