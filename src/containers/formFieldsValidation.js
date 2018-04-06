/**
 * @overview Form fields validation.
 */


export function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = 'Please enter a username.';
  }

  if (!values.password) {
    errors.password = 'Please enter a password.';
  }

  if (!values.firstName) {
    errors.firstName = 'Please enter a first name.';
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter a last name.';
  }

  if (!values.email) {
    errors.email = 'Please enter an email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'Please enter a valid phone number.';
  }

  if (!values.address) {
    errors.address = 'Please enter an address.';
  }

  if (!values.city) {
    errors.city = 'Please enter a city.';
  }

  if (!/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/i.test(values.postalCode)) {
    errors.postalCode = 'Please enter a valid postal code.';
  }

  if (!values.country) {
    errors.country = 'Please enter a country.';
  }

  return errors;
}

export default validate;
