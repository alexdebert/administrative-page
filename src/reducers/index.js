/**
 * @overview Main reducer.
 */

import { combineReducers } from 'redux';

// Reducers
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  router: routerReducer,
});

export default rootReducer;
