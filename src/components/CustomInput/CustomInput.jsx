import React from 'react';
import PropTypes from 'prop-types';

const CustomInput = (props) => {
  const { input } = props;
  const { meta } = props;
  const { label } = props;
  const { type } = props;

  return (
    <fieldset className={`form-group ${meta.touched && meta.error ? 'has-error' : ''}`}>
      <label htmlFor={label} className="control-label">
        <div>
          <input {...input} placeholder={label} className="form-control" type={type} />
          {meta.touched && meta.error && <div className="help-block">{meta.error}</div>}
        </div>
        {label}
      </label>
    </fieldset>
  );
};

CustomInput.propTypes = {
  input: PropTypes.shape({
    username: PropTypes.string,
    value: PropTypes.string,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

CustomInput.defaultProps = {
  input: {
    username: '',
    value: '',
  },
  meta: {
    touched: false,
    error: '',
  },
};

export default CustomInput;
