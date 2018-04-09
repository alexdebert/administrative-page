/**
 * @overview Customer List.
 */

// Core
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Customer from '../Customer/Customer';

const CustomerList = (props) => {
  const { customers } = props;
  const customerItem = customers.map(customer => (
    <Customer
      key={customer.id}
      customer={customer}
      onCustomerSelected={props.onCustomerSelected}
    />
  ));

  return (
    <div className="CustomerList">{customerItem}</div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  onCustomerSelected: PropTypes.func.isRequired,
};

export default CustomerList;
