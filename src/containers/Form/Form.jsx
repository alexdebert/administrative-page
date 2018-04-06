/**
 * @overview Form Customer Page.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

// Components
import CustomInput from '../../components/CustomInput/CustomInput';

// Actions
import { signInUser } from '../../actions/authActions';

const validate = (values) => {
  //TODO
};

class Form extends React.Component {
  constructor() {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(values) {
    //TODO
    console.log(values)
  }

  render() {
    return (
      <div className="CustomerForm">
        <h2 className="text-center">Customer Form</h2>
        <form className="CustomerForm__container" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
          <Field className="CustomerCustomerForm__field" name="firstName" label="First Name" component={CustomInput} type="text" />
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
            multiLine="true"
            rows={2}
          />
          <button action="submit" className="Login__button btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default connect(null, {})(reduxForm({
  form: 'customerForm',
  validate,
})(Form));
