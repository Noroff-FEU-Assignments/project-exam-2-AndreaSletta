import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
//import HandleSubmitInquiry from "../utils/HandleSubmitInquiry";
import AddInquiry from "../utils/AddInquiry";
import { Form } from "react-bootstrap";

export default function GetInquiryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send an inquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control type="text" placeholder="Message..." />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={AddInquiry}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
