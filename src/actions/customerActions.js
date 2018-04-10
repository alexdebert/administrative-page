/**
 * @overview Customer actions.
 */

// Services
import { postCustomer, fetchCustomers } from '../services/customerService';

// Constants
import * as actionTypes from '../constants/action-types';

let nextCustomerId = 0;

export function addCustomer(customerData) {
  return (dispatch) => {
    postCustomer(customerData)
      .then((response) => {
        dispatch({
          type: actionTypes.ADD_CUSTOMER,
          id: nextCustomerId += 1,
          data: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function getCustomers() {
  return (dispatch) => {
    fetchCustomers()
      .then((response) => {
        dispatch({
          type: actionTypes.GET_CUSTOMERS,
          data: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}
