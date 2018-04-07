/**
 * @overview Private route component.
 */

// Core
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...props }) => (
  <Route
    {...props}
    render={() => (authenticated
              ? <Component {...props} />
              : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({}),
  authenticated: PropTypes.bool.isRequired,
};

PrivateRoute.defaultProps = {
  location: {},
};

export default PrivateRoute;
