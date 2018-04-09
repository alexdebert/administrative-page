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
    />
  ));

  return (
    <div className="CustomerList">{customerItem}</div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default CustomerList;
