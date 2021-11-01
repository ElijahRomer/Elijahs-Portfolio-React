import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={(e) => {
          let valid = props.fn(e);
          if (valid) {
            handleShow();
          }
        }}
      >
        submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your message has been sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Name: {props.name}</li>
            <li>Email: {props.email}</li>
            <li>Message: {props.message}</li>
          </ul>
          <p>I will contact you shortly!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              props.clearForm();
              handleClose();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
