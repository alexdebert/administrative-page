/**
 * @overview Home Page.
 */

// Core
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

// Styles
import './HomePage.scss';

const HomePage = (props) => {
  const isAuthenticated = props.authenticated;
  const link = isAuthenticated ?
    (<Link to="/administrate">Administrate customers</Link>) : (<Link to="/login">Login as Administrator</Link>);

  return (
    <div className="Home__container">
      <div className="HomeForm">
        <div className="HomeForm__title">
          <h2>What do you want to do?</h2>
        </div>
        <Paper zDepth={2}>
          <div className="HomeForm__listItem">
            {link}
          </div>
          <Divider />
          <div className="HomeForm__listItem">
            <Link to="/form">Complete Customer form</Link>
          </div>
        </Paper>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, null)(HomePage);
