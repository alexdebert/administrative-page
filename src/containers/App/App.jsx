/**
 * @overview Application.
 */

// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../../components/Login/Login';
import Form from '../../components/Form/Form';
import Administrative from '../Administrative/AdministrativePage';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div id="application-wrapper">
        <main id="main" role="main">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/administrative" component={Administrative} />
          </Switch>
        </main>
      </div>
    </MuiThemeProvider>
  </Router>
);

export default App;
