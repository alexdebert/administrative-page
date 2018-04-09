/**
 * @overview Main reducer.
 */

import { combineReducers } from 'redux';

// Reducers
import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';
import CustomerReducer from './customer';
import ModalReducer from './modal';
import LoggerReducer from './logger';

const rootReducer = combineReducers({
  logger: LoggerReducer,
  auth: AuthReducer,
  customers: CustomerReducer,
  form: FormReducer,
  router: routerReducer,
  modal: ModalReducer,
});

export default rootReducer;
