/**
 * @overview Application initializer.
 */

// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Store
import { configureStore } from './store';

// Component
import App from './containers/App/App';

const store = configureStore();
const target = document.getElementById('root');

ReactDOM.render(<Provider store={store}><App /></Provider>, target);
