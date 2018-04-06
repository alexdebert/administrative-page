/**
 * @overview Application.
 */

// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import Form from '../Form/Form';
import Administrative from '../AdministrativePage/AdministrativePage';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div id="application-wrapper">
        <main id="main" role="main">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/administrative" component={Administrative} />
          </Switch>
        </main>
      </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
