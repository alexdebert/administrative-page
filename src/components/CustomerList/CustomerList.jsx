/**
 * @overview Customer List.
 */

// Core
import React from 'react';

// Components
import Customer from '../Customer/Customer';

const CustomerList = (props) => {
  const { customers } = props;
  console.log(customers);
  return (
    customers.map(customer => (
      <Customer
        key={customer.id}
        customer={customer}
      />
    ))
  );
};

export default CustomerList;
