/**
 * @overview Login Page.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// Components
import CustomInput from '../../components/CustomInput/CustomInput';

// Actions
import { signInUser } from '../../actions/authActions';

// Styles
import './LoginPage.scss';

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please enter a username.';
  }

  if (!values.password) {
    errors.password = 'Please enter a password.';
  }

  return errors;
};

class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    this.props.signInUser(values);
  }

  render() {
    return (
      <div className="Login">
        <h2 className="text-center">Log In</h2>
        <form className="Login__form" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field className="Login__field" name="username" label="Username" component={CustomInput} type="text" />
          <Field className="Login__field" name="password" label="Password" component={CustomInput} type="password" />
          <button action="submit" className="Login__button btn btn-primary">Sign In</button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  signInUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default connect(null, { signInUser })(reduxForm({
  form: 'login',
  validate,
})(LoginPage));
