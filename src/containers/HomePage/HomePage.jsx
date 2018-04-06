/**
 * @overview Home Page.
 */

// Core
import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Styles
import './Home.scss';

const HomePage = () => (
  <div className="Home__container">
    <div className="HomeForm">
      <h2>What do you want to do?</h2>
      <div>
        <Link to="/login">Login as Administrator</Link>
      </div>
      <div>
        <Link to="/form">Complete Customer form</Link>
      </div>
    </div>
  </div>

);

export default HomePage;
