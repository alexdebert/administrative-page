/**
 * @overview Logger actions.
 */


export function logMessage(log) {
  console.log(log);
}

export function customerFormActions(action, type) {
  console.log(`${action}${type}`);
}

export function loggerAction(action = {}, type = '') {
  switch (action) {
    case 'CUSTOMER_FORM':
      return customerFormActions(action, type);
    default:
      return logMessage(action);
  }
}
