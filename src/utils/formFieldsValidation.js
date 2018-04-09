/**
 * @overview Form fields validation.
 */

// Constants
import * as constants from '../constants/constants';

export function validate(values) {
  const errors = {};

  if (!values.username) {
    errors.username = constants.ERROR_USERNAME;
  }

  if (!values.password) {
    errors.password = constants.ERROR_PASSWORD;
  }

  if (!values.firstName) {
    errors.firstName = constants.ERROR_FIRST_NAME;
  }

  if (!values.lastName) {
    errors.lastName = constants.ERROR_LAST_NAME;
  }

  if (!values.email) {
    errors.email = constants.ERROR_EMAIL;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = constants.ERROR_INVALID_EMAIL;
  }

  if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phoneNumber) && values.phoneNumber) {
    errors.phoneNumber = constants.ERROR_PHONE_NUMBER;
  }

  if (!values.address) {
    errors.address = constants.ERROR_ADDRESS;
  }

  if (!values.city) {
    errors.city = constants.ERROR_CITY;
  }

  if (!/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/i.test(values.postalCode) && values.postalCode) {
    errors.postalCode = constants.ERROR_POSTAL_CODE;
  }

  if (!values.country) {
    errors.country = constants.ERROR_COUNTRY;
  }

  return errors;
}

export default validate;
