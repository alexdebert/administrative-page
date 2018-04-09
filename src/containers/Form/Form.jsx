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

// Styles
import './Form.scss';

// Utils
import { validate } from '../../utils/formFieldsValidation';
import { loggerAction } from '../../utils/logger';

const afterSubmit = (result, dispatch) => dispatch(reset('customerForm'));

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentDidMount() {
    this.props.loggerAction('CUSTOMER_FORM', '_CREATED');
  }

  componentWillUnmount() {
    this.props.loggerAction('CUSTOMER_FORM', '_UNFILLED_LEAVE_PAGE');
  }

  handleFormSubmit(values) {
    this.props.addCustomer(values);
    this.props.loggerAction('CUSTOMER_FORM', '_SUBMITTED');
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
          <Field className="CustomerForm__field" name="firstName" label="First Name" component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="lastName" label="Last Name" component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="email" label="email" component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="phoneNumber" label="Phone Number" component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="address" label="Address" component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="city" label="City" component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="postalCode" label="Postal Code" component={CustomInput} type="text" />
          <Field className="CustomerForm__field" name="country" label="Country" component={CustomInput} type="text" />
          <Field
            className="CustomerForm__field"
            name="comments"
            label="Comments"
            component={CustomInput}
            type="text"
            multiLine={isMultiLine}
            rows={2}
          />
          <RaisedButton className="CustomerForm__button" label="Submit" type="submit" primary={isPrimary} />
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
  loggerAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addCustomer,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'customerForm',
  validate,
  loggerAction,
  onSubmitSuccess: afterSubmit,
})(Form));
