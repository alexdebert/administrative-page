/**
 * @overview Home Page.
 */

// React
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="home-wrapper">
    <h2>What do you want to do?</h2>
    <Link to="/login">Login as Administrator</Link>
    <Link to="/form">Complete Customer form</Link>
  </div>
);

export default HomePage;
