/**
 * @overview Modal reducer.
 */

// Constants
import * as actionTypes from '../constants/action-types';

const initialState = {
  selectedCustomer: null,
  modalIsOpen: false,
};

export default function modal(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedCustomer: action.customer.selectedCustomer,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedCustomer: null,
      };
    default:
      return state;
  }
}
