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

const rootReducer = combineReducers({
  auth: AuthReducer,
  customers: CustomerReducer,
  form: FormReducer,
  router: routerReducer,
  modal: ModalReducer,
});

export default rootReducer;
