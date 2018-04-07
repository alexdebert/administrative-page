/**
 * @overview Header.
 */

// Core
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styles
import { white } from 'material-ui/styles/colors';

// Components
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import LoggedAppBar from '../LoggedAppBar/LoggedAppBar';
import LoginAppBar from '../../components/LoginAppBar/LoginAppBar';

// Actions
import { logoutUser } from '../../actions/authActions';

const HomeIconAppBar = (
  <Link to="/">
    <IconButton>
      <HomeIcon color={white} />
    </IconButton>
  </Link>
);

const Header = (props) => {
  const isAuthenticated = props.authenticated;
  const icon = isAuthenticated ? (<LoggedAppBar />) : (<LoginAppBar />);
  return (
    <AppBar
      title="Administrative Page"
      iconElementLeft={HomeIconAppBar}
      iconElementRight={icon}
    />
  );
};

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { logoutUser })(Header);
