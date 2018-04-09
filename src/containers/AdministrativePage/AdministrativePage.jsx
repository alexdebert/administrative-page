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
import CustomerModal from '../../components/CustomerModal/CustomerModal';

// Actions
import { getCustomers, addCustomer } from '../../actions/customerActions';
import { openModal, closeModal } from '../../actions/modalActions';

// Utils
import { loggerAction } from '../../utils/logger';

// Styles
import './AdministrativePage.scss';

class Administrative extends Component {
  componentDidMount() {
    this.props.getCustomers();
    this.props.loggerAction('Administrative interface');
  }

  renderCustomerList() {
    const { customers } = this.props;
    return customers.length > 0 ?
      (<CustomerList
        onCustomerSelected={selectedCustomer => this.props.openModal({ selectedCustomer })}
        customers={customers}
      />) : (<span>No customer registered yet.</span>);
  }

  render() {
    return (
      <div className="AdministrativePage">
        <h2>Administrate Customers</h2>
        { this.renderCustomerList() }
        <CustomerModal
          modalIsOpen={this.props.modalIsOpen}
          selectedCustomer={this.props.selectedCustomer}
          onRequestClose={() => this.props.closeModal()}
        />
      </div>
    );
  }
}

Administrative.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  getCustomers: PropTypes.func.isRequired,
  loggerAction: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedCustomer: PropTypes.shape({}),
  modalIsOpen: PropTypes.bool.isRequired,
};

Administrative.defaultProps = {
  selectedCustomer: {},
};

const mapStateToProps = state => ({
  customers: state.customers.data,
  modalIsOpen: state.modal.modalIsOpen,
  selectedCustomer: state.modal.selectedCustomer,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getCustomers,
    loggerAction,
    addCustomer,
    openModal,
    closeModal,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Administrative);
