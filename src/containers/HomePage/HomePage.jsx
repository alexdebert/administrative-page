/**
 * @overview Home Page.
 */

// Core
import React from 'react';

// Components
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

// Styles
import './HomePage.scss';

const HomePage = () => (
  <div className="Home__container">
    <div className="HomeForm">
      <div className="HomeForm__title">
        <h2>What do you want to do?</h2>
      </div>
      <Paper zDepth={2}>
        <div className="HomeForm__listItem">
          <Link to="/login">Login as Administrator</Link>
        </div>
        <Divider />
        <div className="HomeForm__listItem">
          <Link to="/form">Complete Customer form</Link>
        </div>
      </Paper>
    </div>
  </div>
);

export default HomePage;
