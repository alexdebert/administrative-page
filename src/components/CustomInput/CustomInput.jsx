/**
 * @overview Custom input.
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const CustomInput = ({
  input,
  label,
  type,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    type={type}
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);


CustomInput.propTypes = {
  input: PropTypes.shape({}),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

CustomInput.defaultProps = {
  input: {},
  meta: {
    touched: false,
    error: '',
  },
};

export default CustomInput;
