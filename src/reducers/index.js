/**
 * @overview Main reducer.
 */

import { combineReducers } from 'redux';

// Reducers
import { routerReducer } from 'react-router-redux';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
  router: routerReducer,
});

export default rootReducer;
