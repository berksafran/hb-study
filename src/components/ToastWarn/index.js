import React from "react";
import { Toast } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ToastContainer = styled.div`
  .toast {
    position: fixed;
    background-color: #ddfad3;
    color: #5aad5b;
    border-color: #5aad5b;
    border-radius: 0.5em;
    width: auto;
    max-width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -20vw);
    z-index: 2000;
  }

   .toast:active, .toast:focus {
    z-index: 10000;
  }
`;

function ToastWarn(props) {
  return (
    <ToastContainer>
      <Toast
        onClose={() => props.handleToast()}
        show={props.showToast.status}
        delay={1000}
        autohide
        className="toast"
      >
        <Toast.Body>
          {props.toastType === "remove" ? (
            <h2>
              <strong>{props.showToast.name}</strong> removed.
            </h2>
          ) : (
            <h2>
              <strong>{props.showToast.name}</strong> added.
            </h2>
          )}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

ToastWarn.propTypes = {
showToast: PropTypes.shape({
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  toastType: PropTypes.oneOf(['remove', 'add']), 
}).isRequired,
};

export default ToastWarn;
