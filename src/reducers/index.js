/**
 * @overview Main reducer.
 */

import { combineReducers } from 'redux';

// Reducers
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  router: routerReducer,
});

export default rootReducer;
