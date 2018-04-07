/**
 * @overview Public route component.
 */

// Core
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, authenticated, ...props }) => (
  <Route
    {...props}
    render={() => (authenticated === false
              ? <Component {...props} />
              : <Redirect to={{ pathname: '/administrate', state: { from: props.location } }} />)}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({}),
  authenticated: PropTypes.bool.isRequired,
};

PublicRoute.defaultProps = {
  location: {},
};

export default PublicRoute;
