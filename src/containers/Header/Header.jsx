import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import { white } from 'material-ui/styles/colors';

const homeIcon = (
  <Link to="/">
    <IconButton>
      <HomeIcon color={white} />
    </IconButton>
  </Link>
);

const Header = () => (
  <AppBar
    title="Administrative Page"
    iconElementLeft={homeIcon}
  />
);

export default Header;
