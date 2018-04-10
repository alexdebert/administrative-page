/**
 * @overview Customer services.
 */

import axios from 'axios';

// Constants
import { BASE_URL } from '../constants/constants';

export const postCustomer = customerData => (
  axios.post(`${BASE_URL}customers`, customerData)
);

export const fetchCustomers = () => (
  axios.get(`${BASE_URL}customers`)
);
