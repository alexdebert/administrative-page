/**
 * @overview Logged icon in AppBar.
 */

// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Components
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from '../../../node_modules/material-ui/svg-icons/navigation/more-vert';

// Actions
import { logoutUser } from '../../actions/authActions';

class LoggedAppBar extends Component {
  handleSignOut() {
    this.props.logoutUser();
  }

  render(props) {
    return (
      <IconMenu
        {...props}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Link to="/administrate">
          <MenuItem primaryText="Administrate" className="MenuItemLink--undecorated" />
        </Link>
        <MenuItem onClick={() => this.handleSignOut()} primaryText="Sign out" />
      </IconMenu>
    );
  }
}

LoggedAppBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(LoggedAppBar);
