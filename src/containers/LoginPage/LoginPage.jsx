/**
 * @overview Login page.
 */

// React
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


// Components
import CustomInput from '../../components/CustomInput/CustomInput';

// Actions
import { signInUser } from '../../actions/authActions';

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.email = 'Please enter a username.';
  }

  if (!values.password) {
    errors.password = 'Please enter a password.';
  }

  return errors;
};

class LoginPage extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    this.props.signInUser(values);
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Log In</h2>
          <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
            <Field name="username" component={CustomInput} onChange={this.handleChange} type="text" label="Username" />
            <Field name="password" component={CustomInput} type="password" label="Password" />
            <button action="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
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
