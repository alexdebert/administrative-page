/**
 * @overview Application.
 */

// React
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { configureStore, history } from '../../store';

// Components
import Home from '../Home/Home';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="application-container">
        <Route exact path="/" component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
