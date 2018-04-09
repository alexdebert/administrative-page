/**
 * @overview Customer actions.
 */

// Services
import { postCustomer, fetchCustomers } from '../services/customerService';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const GET_CUSTOMERS = 'GET_CUSTOMERS';

let nextCustomerId = 0;

export function addCustomer(customerData) {
  return function (dispatch) {
    postCustomer(customerData)
      .then((response) => {
        dispatch({
          type: 'ADD_CUSTOMER',
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
  return function (dispatch) {
    fetchCustomers()
      .then((response) => {
        dispatch({
          type: 'GET_CUSTOMERS',
          data: response.data,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
}
