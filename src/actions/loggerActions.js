/**
 * @overview Logger actions.
 */

export const ACCESS_APPLICATION = 'ACCESS_APPLICATION';

export function logAccessApplication() {
  return {
    type: ACCESS_APPLICATION,
    log: 'Access Application',
  };
}

export function loggerAction(action) {
  switch (action) {
    case ACCESS_APPLICATION:
      return logAccessApplication();
    default:
      return null;
  }
}
