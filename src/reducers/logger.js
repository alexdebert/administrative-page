/**
 * @overview Authentication reducer.
 */

import * as LOG from '../actions/loggerActions';

const initialState = {
  log: console.log(''),
};

export default function logger(state = initialState, action = {}) {
  console.log(action);
  switch (action.type) {
    case LOG.ACCESS_APPLICATION:
      return console.log(action.log);
    default:
      return state;
  }
}
