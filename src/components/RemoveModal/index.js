import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function RemoveModal(props) {
    return (
       
      <Modal show={props.showModal.status} onHide={props.handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Remove Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Do you want to remove:</h5>
          <h3>{props.showModal.name && props.showModal.name}</h3>
        </Modal.Body>
        <Modal.Footer className="align-center">
          <Button variant="secondary" onClick={() => props.removeLink(props.showModal.id)}>
            OK
          </Button>
          <Button variant="secondary" onClick={props.handleModal}>
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  RemoveModal.propTypes = {
    showmodal: PropTypes.exact({
      statos: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    handleModal: PropTypes.func,
    removeLink: PropTypes.func.isRequired,
  }

export default RemoveModal;