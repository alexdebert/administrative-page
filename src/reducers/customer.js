/**
 * @overview Customer reducer.
 */

import { ADD_CUSTOMER, GET_CUSTOMERS } from '../actions/customerActions';

const initialState = {
  data: [],
};

export default function customers(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        data: action.data,
      };
    case ADD_CUSTOMER:
      return {
        data: [...state.customers,
          {
            id: action.id,
            customerData: action.data,
          },
        ],
      };
    default:
      return state;
  }
}
