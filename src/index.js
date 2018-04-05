/**
 * @overview Application initializer.
 */

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Component
import App from './containers/App/App';

const target = document.getElementById('root');

ReactDOM.render(<App />, target);
