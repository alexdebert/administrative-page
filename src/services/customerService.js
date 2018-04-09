/**
 * @overview Customer services.
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:9001/customers/';

export const postCustomer = customerData => (
  axios.post(BASE_URL, customerData)
);

export const fetchCustomers = () => (
  axios.get(BASE_URL)
);
