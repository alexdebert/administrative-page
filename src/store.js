/**
 * @overview Storage.
 */

import reduxThunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

// Actions
import { accessApplicationLog } from './actions/loggerActions';

export const history = createHistory();

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(reduxThunk, routerMiddleware(history))),
  );

  accessApplicationLog();

  return store;
}
