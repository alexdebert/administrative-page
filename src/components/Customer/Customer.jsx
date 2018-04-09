/**
 * @overview Customer List Item.
 */

import React from 'react';
import PropTypes from 'prop-types';

// Components
import { ListItem } from 'material-ui/List';

const Customer = (props) => {
  const { firstName } = props.customer;
  const { lastName } = props.customer;
  const fullName = `${firstName} ${lastName}`;

  return (
    <ListItem>{fullName}</ListItem>
  );
};

Customer.propTypes = {
  customer: PropTypes.shape({}).isRequired,
};

export default Customer;
