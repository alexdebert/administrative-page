/**
 * @overview Form Customer Page.
 */

// Core
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reset, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import CustomInput from '../../components/CustomInput/CustomInput';

// Actions
import { addCustomer } from '../../actions/customerActions';
import { leaveFormPageLog, formSubmittedLog, customerFormCreatedLog, customerFormTimeoutLog } from '../../actions/loggerActions';

// Constants
import * as constants from '../../constants/constants';

// Styles
import './Form.scss';

// Utils
import { validate } from '../../utils/formFieldsValidation';

const afterSubmit = (result, dispatch) => dispatch(reset('customerForm'));

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };

    this.timer = setTimeout(() => this.props.customerFormTimeoutLog(), 5000);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    this.props.customerFormCreatedLog();
  }

  componentWillUnmount() {
    this.props.leaveFormPageLog();
    clearTimeout(this.timer);
  }

  handleFormSubmit(values) {
    this.props.addCustomer(values);
    this.props.formSubmittedLog();
    this.setState({
      open: true,
    });
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const isPrimary = true;
    const isMultiLine = true;
    return (
      <div className="CustomerForm__container">
        <h2 className="text-center">Customer Form</h2>
        <form className="CustomerForm" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field className="CustomerForm__field" name="firstName" label={constants.FIRST_NAME} component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="lastName" label={constants.LAST_NAME} component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="email" label={constants.EMAIL} component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="phoneNumber" label={constants.PHONE_NUMBER} component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="address" label={constants.ADDRESS} component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="city" label={constants.CITY}component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="postalCode" label={constants.POSTAL_CODE} component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="country" label={constants.COUNTRY}component={CustomInput} type="text" />
          <Field
            className="CustomerForm__field"
            name="comments"
            label={constants.COMMENTS}
            component={CustomInput}
            type="text"
            multiLine={isMultiLine}
            rows={2}
          />
          <RaisedButton className="CustomerForm__button" label={constants.SUBMIT} type="submit" primary={isPrimary} />
        </form>
        <Snackbar
          open={this.state.open}
          message="Form submitted successfully"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

Form.propTypes = {
  addCustomer: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  leaveFormPageLog: PropTypes.func.isRequired,
  formSubmittedLog: PropTypes.func.isRequired,
  customerFormCreatedLog: PropTypes.func.isRequired,
  customerFormTimeoutLog: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addCustomer,
    customerFormCreatedLog,
    formSubmittedLog,
    customerFormTimeoutLog,
    leaveFormPageLog,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'customerForm',
  validate,
  onSubmitSuccess: afterSubmit,
})(Form));
