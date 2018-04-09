/**
 * @overview Login Page.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// Components
import RaisedButton from 'material-ui/RaisedButton';
import CustomInput from '../../components/CustomInput/CustomInput';

// Actions
import { loginUser } from '../../actions/authActions';

// Styles
import './LoginPage.scss';

// Validation
import { validate } from '../../utils/formFieldsValidation';
import * as constants from '../../constants/constants';

class LoginPage extends Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    this.props.loginUser(values);
  }

  renderAuthenticationError() {
    if (this.props.authenticationError) {
      return (
        <div className="LoginMessage">
          <span className="LoginMessage--error">{ this.props.authenticationError }</span>
        </div>
      );
    }
    return null;
  }

  render() {
    const isPrimary = true;
    return (
      <div className="Login__container">
        <h2 className="text-center">Log In</h2>
        { this.renderAuthenticationError() }
        <form className="Login__form" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field className="Login__field" name="username" label={constants.USERNAME} component={CustomInput} type="text" />
          <Field className="Login__field" name="password" label={constants.PASSWORD} component={CustomInput} type="password" />
          <RaisedButton className="Login__button" label={constants.SIGN_IN} type="submit" primary={isPrimary} />
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  authenticationError: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

LoginPage.defaultProps = {
  authenticationError: '',
};

const mapStateToProps = state => (
  {
    authenticationError: state.auth.error,
  }
);

export default connect(mapStateToProps, { loginUser })(reduxForm({
  form: 'login',
  validate,
})(LoginPage));
