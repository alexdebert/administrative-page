/**
 * @overview Customer Modal.
 */

// Core
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// Components
import RaisedButton from 'material-ui/RaisedButton';

// Styles
import './CustomerModal.scss';

const CustomerModal = (props) => {
  if (!props.selectedCustomer) {
    return null;
  }

  const { selectedCustomer } = props;
  const isPrimary = true;
  return (
    <Modal
      ariaHideApp={false}
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.onRequestClose()}
      className="CustomerModal"
    >
      <div className="CustomerModal__content">
        <div className="CustomerModal__title">
          <h3>Customer Details</h3>
        </div>
        <p><strong>First Name:</strong> { selectedCustomer.firstName }</p>
        <p><strong>Last Name:</strong> { selectedCustomer.lastName }</p>
        <p><strong>Email:</strong> { selectedCustomer.email }</p>
        <p><strong>Phone Number:</strong> { selectedCustomer.phoneNumber }</p>
        <p><strong>Address:</strong> { selectedCustomer.address }</p>
        <p><strong>City:</strong> { selectedCustomer.city }</p>
        <p><strong>Postal Code:</strong> { selectedCustomer.postalCode }</p>
        <p><strong>Country:</strong> { selectedCustomer.country }</p>
        <p><strong>Comments:</strong> { selectedCustomer.comments }</p>
        <RaisedButton
          className="CustomerModal__button"
          label="Close"
          primary={isPrimary}
          onClick={() => props.onRequestClose()}
        />
      </div>
    </Modal>
  );
};

CustomerModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  selectedCustomer: PropTypes.shape({}),
};

CustomerModal.defaultProps = {
  selectedCustomer: {},
};

export default CustomerModal;
