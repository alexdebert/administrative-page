// Core
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const LoginAppBar = props => (
  <Link to="/login">
    <FlatButton {...props} label="Login" />
  </Link>
);

LoginAppBar.muiName = 'FlatButton';

export default LoginAppBar;
