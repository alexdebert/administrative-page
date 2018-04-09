/**
 * @overview Administrative Page.
 */

// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import CustomerList from '../../components/CustomerList/CustomerList';

// Actions
import { getCustomers } from '../../actions/customerActions';

// Styles
import './AdministrativePage.scss';

class Administrative extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }

  renderCustomerList() {
    const { customers } = this.props;
    return customers.length > 0 ?
      (<CustomerList customers={customers} />) : (<span>No customer registered yet.</span>);
  }

  render() {
    return (
      <div className="AdministrativePage">
        <h2>Administrate Customers</h2>
        { this.renderCustomerList() }
      </div>
    );
  }
}

Administrative.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  getCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getCustomers,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Administrative);
