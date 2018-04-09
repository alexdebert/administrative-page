/**
 * @overview Application.
 */

// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

// Components
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import Form from '../Form/Form';
import Administrative from '../AdministrativePage/AdministrativePage';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../../components/PublicRoute/PublicRoute';

// Actions
import { getCustomers } from '../../actions/customerActions';

// Styles
import './App.scss';

const App = (props) => {
  const isAuthenticated = props.authenticated;
  const { customers } = props;
  return (
    <Router>
      <MuiThemeProvider>
        <div id="application-wrapper">
          <main id="main" role="main">
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/form" component={Form} />
              <PublicRoute authenticated={isAuthenticated} exact path="/login" component={LoginPage} />
              <PrivateRoute authenticated={isAuthenticated} customers={customers} exact path="/administrate" component={Administrative} />
            </Switch>
          </main>
        </div>
      </MuiThemeProvider>
    </Router>
  );
};

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  customers: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    customers: state.customers.data,
  };
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getCustomers,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
