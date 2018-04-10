/**
 * @overview Customer reducer.
 */

// Constants
import * as actionTypes from '../constants/action-types';

const initialState = {
  data: [],
};

export default function customers(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_CUSTOMERS:
      return {
        ...state,
        data: action.data,
      };
    case actionTypes.ADD_CUSTOMER:
      return {
        data: [...state.data,
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
